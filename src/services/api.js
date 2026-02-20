/**
 * Mock API Service Layer
 * 
 * This file serves as a placeholder for future backend integration.
 * It uses simulated delays to mimic network requests.
 * 
 * Recommended future tech stack for real implementation: 
 * Node.js (Express/NestJS) or Serverless functions (AWS Lambda/Vercel)
 */

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const APIService = {

    /**
     * Submit Contact Form
     * @param {Object} data - Form data
     * @returns {Promise<Object>} Response object
     */
    submitContactForm: async (data) => {
        console.log("Submitting contact form data:", data);
        await delay(1200); // Simulate network latency

        // Simulate validation
        if (!data.email || !data.email.includes('@')) {
            throw new Error("Invalid email address provided.");
        }

        return {
            success: true,
            message: "Thank you for reaching out! Our team will contact you shortly.",
            referenceId: `REQ-${Math.floor(Math.random() * 10000)}`
        };
    },

    /**
     * Fetch Dynamic Content (e.g., dynamic case studies or testimonials)
     * @returns {Promise<Array>} List of items
     */
    fetchContent: async () => {
        await delay(800);
        return [
            { id: 1, type: "Case Study", title: "Enterprise AI Adoption", value: "$2M Saved" },
            { id: 2, type: "Testimonial", title: "Seamless Integration", author: "CTO, Fortune 500" }
        ];
    }

};
