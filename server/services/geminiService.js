const axios = require('axios');
const Internship = require('../models/Internship');
const Service = require('../models/Service');
const Product = require('../models/Product');

const SYSTEM_PROMPT = `
You are the official AI Assistant for "Krupa Sindhu Advertising & Software Pvt. Ltd.", an ISO 9001:2015 Certified technology and training organization established in 2018 under Director Vivek Dange.

Official Company Information:
- Company Name: Krupa Sindhu Advertising & Software Pvt. Ltd.
- Established: 2018
- Director: Vivek Dange
- Certification: ISO 9001:2015 Certified
- Email: admin@krupasindhu.org.in
- Phone / WhatsApp: +91 7350570999 (Format: https://wa.me/917350570999)
- Offerings: Custom Software Development, Web & Mobile Applications, Digital Advertising, UI/UX Design, IT Training & Industry Internship Programs.
`;

const generateChatResponse = async (userMessage, history = []) => {
  const apiKey = process.env.GEMINI_API_KEY;

  // Retrieve dynamic context from DB if connected
  let dynamicContext = '';
  try {
    const internships = await Internship.find({ status: 'active' }).select('courseName duration fees eligibility skills').lean();
    if (internships.length > 0) {
      dynamicContext += `\nAvailable Internships/Courses:\n` + internships.map(i => `- ${i.courseName} (Duration: ${i.duration}, Fee: ${i.fees}, Eligibility: ${i.eligibility}, Skills: ${i.skills.join(', ')})`).join('\n');
    }
  } catch (err) {
    // Dynamic context fallback
  }

  // If valid Gemini API Key is configured (and not dummy template), call Google API
  if (apiKey && apiKey !== 'YOUR_GEMINI_API_KEY' && apiKey.length > 10) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
      const contents = [
        {
          role: 'user',
          parts: [{ text: `${SYSTEM_PROMPT}\n${dynamicContext}\n\nUser Question: ${userMessage}` }]
        }
      ];

      const response = await axios.post(url, { contents }, { headers: { 'Content-Type': 'application/json' }, timeout: 3000 });
      const candidate = response.data?.candidates?.[0];
      if (candidate?.content?.parts?.[0]?.text) {
        return candidate.content.parts[0].text;
      }
    } catch (error) {
      console.log('[Gemini API Note]: Using knowledge fallback mode.');
    }
  }

  // Knowledge base fallback responder
  return getFallbackResponse(userMessage, dynamicContext);
};

const getFallbackResponse = (message, dynamicContext) => {
  const lowerMsg = message.toLowerCase();

  if (lowerMsg.includes('fee') || lowerMsg.includes('cost') || lowerMsg.includes('price')) {
    return `Our internship and training programs offer competitive, industry-aligned fee structures with installment options available. For exact course fee details, please visit our Internships page or contact our admissions team directly via WhatsApp/Phone at +91 7350570999 or email admin@krupasindhu.org.in.`;
  }

  if (lowerMsg.includes('internship') || lowerMsg.includes('course') || lowerMsg.includes('training')) {
    return `Krupa Sindhu Advertising & Software Pvt. Ltd. provides hands-on IT internships in Full Stack Web Development (MERN / Java), Software Testing (Automation & Manual), Python & Data Science, and Digital Marketing. Students work on real industry projects and receive ISO 9001:2015 certified completion certificates. You can explore and apply on our Internships page!`;
  }

  if (lowerMsg.includes('service') || lowerMsg.includes('software') || lowerMsg.includes('develop') || lowerMsg.includes('ad')) {
    return `We offer a wide range of services including Custom Software Development, Web & Mobile App Development, Digital Advertising & Marketing, UI/UX Design, and Corporate IT Solutions tailored for businesses of all sizes.`;
  }

  if (lowerMsg.includes('contact') || lowerMsg.includes('phone') || lowerMsg.includes('email') || lowerMsg.includes('address') || lowerMsg.includes('whatsapp')) {
    return `You can reach Krupa Sindhu Advertising & Software Pvt. Ltd. at:\n• Email: admin@krupasindhu.org.in\n• Phone / WhatsApp: +91 7350570999\n• Director: Vivek Dange\nWe look forward to connecting with you!`;
  }

  if (lowerMsg.includes('iso') || lowerMsg.includes('certified') || lowerMsg.includes('certif')) {
    return `Krupa Sindhu Advertising & Software Pvt. Ltd. is an ISO 9001:2015 Certified organization (Established in 2018 under Director Vivek Dange). We adhere to strict quality management standards across our software engineering, digital advertising, and professional internship divisions.`;
  }

  if (lowerMsg.includes('director') || lowerMsg.includes('vivek') || lowerMsg.includes('founder') || lowerMsg.includes('about')) {
    return `Krupa Sindhu Advertising & Software Pvt. Ltd. was established in 2018 under the visionary leadership of Director Vivek Dange. We are an ISO 9001:2015 Certified software and digital advertising firm focused on delivering high-impact technology solutions and empowering career aspirants.`;
  }

  return `Thank you for contacting Krupa Sindhu Advertising & Software Pvt. Ltd. (ISO 9001:2015 Certified, Est. 2018). We specialize in Software Development, Digital Advertising, and Industry Internships. How can we help you today? Feel free to ask about our courses, services, or contact details!`;
};

module.exports = {
  generateChatResponse
};
