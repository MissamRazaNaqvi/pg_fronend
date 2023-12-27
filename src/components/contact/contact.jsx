import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Contact() {
    const { register, handleSubmit, reset } = useForm()
    const [studentData, setStudentData] = useState()
    const onSubmit = async (data) => {
        const res = await axios.post(`${process.env.REACT_APP_API_KEY}/student`, { data })
        reset()
        if (res.status === 200 || res.statusText === 'ok') {
            console.log(res.data)
        }
    }
    async function fetchStudentData() {
        const { data } = await axios.get(`${process.env.REACT_APP_API_KEY}`)
        // console.log(data)
        setStudentData(data)
    }
    // console.log(studentData)
    useEffect(() => {
        // fetchStudentData()
    }, [studentData])
    // console.log(process.env.NODESERVER_LINK)
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
