import { Form, redirect } from "react-router-dom"
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
                    <option value="tinydolphin">tinydolphin</option>
                    <option value="tinyllama">tinyllama</option>
                </select>
                <p>
                    <button type="submit">Save</button>
                </p>
            </Form>
        </>
    )
}

export async function action({ request }) {
    const formData = await request.formData()
    const chat = await createChat(formData.get('name'), formData.get('model'))
    return redirect(`/chat/${chat._id}`)
}