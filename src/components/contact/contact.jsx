import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

export default function Contact() {
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {
        console.log(data)
        await axios.post('http://localhost:8000/student', { data })
        reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Name</label>
                    <input type="text" name="name"
                        {...register("firstName", {
                            required: "Please enter your first name.",
                        })}
                    />
                </div>
                <input type="submit" />
            </form>
        </div>
    )
}
