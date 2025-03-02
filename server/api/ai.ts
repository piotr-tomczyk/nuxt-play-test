import OpenAI from "openai";

export default defineEventHandler(async (event): Promise<string | null> => {
    try {
        const body = await readBody(event)

        const openai = new OpenAI();
        const completion = await openai.chat.completions.create({
            messages: [
                { role: "system", content: "You are a helpful assistant. Respond in the style of Donald Duck" },
                { role: "user", content: body.message }
            ],
            model: "gpt-4o",
            store: true,
        });

        return completion.choices[0].message.content || null;
    } catch(error) {
        console.error(error);
        return null;
    }
})
