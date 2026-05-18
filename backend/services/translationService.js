const OpenAI = require('openai');

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const translateToHindi = async (englishText) => {
    const response = await openai.chat.completions.create({
        model: 'gpt-4.1-mini',
        messages: [
            {
                role: 'system',
                content:
                    'Translate English text into natural Hindi while preserving tone and formatting.'
            },
            {
                role: 'user',
                content: englishText
            }
        ]
    });

    return response.choices[0].message.content;
};

module.exports = {
    translateToHindi
};