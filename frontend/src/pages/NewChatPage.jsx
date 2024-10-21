import { Form } from "react-router-dom"
import { createChat } from "../services/chats"

export default function NewChatPage() {
    return (
        <>
            <Form method="post" id="new-chat-form">
                <input
                    placeholder="chat name"
                    type="text"
                    name="name"
                />
                <select name="model" id="model-select">
                    <option value="tinyllama">tinyllama</option>
                    <option value="tinydolphin">tinydolphin</option>
                </select>
                <p>
                    <button type="submit">Save</button>
                    <button type="button">Cancel</button>
                </p>
            </Form>
        </>
    )
}

export async function action({ request }) {
    const formData = await request.formData()
    const formObject = Object.fromEntries(formData)
    return await createChat(formObject.name, formObject.model)
}