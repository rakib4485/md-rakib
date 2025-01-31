"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "(+880) 1870028843",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "mdrakibul.developer@gmail.com",
    },
    {
        icon: <FaMapMarkedAlt />,
        title: "Address",
        description: "Uttara, Dhaka, Bangladesh",
    },
];

const Contacts = () => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSelectChange = (value) => {
        setFormData({ ...formData, service: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        const { firstname, lastname, email, phone, service, message } = formData;

        // EmailJS integration
        emailjs
            .send(
                "service_zo67vxs", // Replace with your Service ID
                "template_vkajb2v", // Replace with your Template ID
                {
                    firstname,
                    lastname,
                    email,
                    phone,
                    service,
                    message,
                },
                "r2halcMbcVrPP6p5c" // Replace with your Public Key
            )
            .then(
                () => {
                    setStatusMessage("Your message has been sent successfully!");
                    setIsSubmitting(false);
                    setFormData({
                        firstname: "",
                        lastname: "",
                        email: "",
                        phone: "",
                        service: "",
                        message: "",
                    });
                },
                () => {
                    setStatusMessage("Failed to send your message. Please try again.");
                    setIsSubmitting(false);
                }
            );
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form
                            className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
                            onSubmit={handleSubmit}
                        >
                            <h3 className="text-4xl text-accent">Let{`'`}s work together</h3>
                            <p className="text-white/60">
                                Got a brilliant idea or a question? I{`'`}d love to hear from you!
                                Drop me a message below, and let{`'`}s turn your vision into reality! 🚀
                            </p>
                            {/* input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input
                                    type="text"
                                    name="firstname"
                                    placeholder="Firstname"
                                    value={formData.firstname}
                                    onChange={handleChange}
                                    required
                                />
                                <Input
                                    type="text"
                                    name="lastname"
                                    placeholder="Lastname"
                                    value={formData.lastname}
                                    onChange={handleChange}
                                    required
                                />
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Email address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <Input
                                    type="text"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            {/* select */}
                            <Select onValueChange={handleSelectChange}>
                                <SelectTrigger className="w-full">
                                    <SelectValue
                                        placeholder="Select a service"
                                        value={formData.service}
                                    />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value="Web Development">Web Development</SelectItem>
                                        <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                                        <SelectItem value="Logo Design">Logo Design</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            {/* text area */}
                            <Textarea
                                className="h-[200px]"
                                placeholder="Type your message here."
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                            {/* button */}
                            <Button size="md" className="max-w-40" disabled={isSubmitting}>
                                {isSubmitting ? "Sending..." : "Send message"}
                            </Button>
                            {statusMessage && <p className="text-white/60 mt-4">{statusMessage}</p>}
                        </form>
                    </div>
                    {/* info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className="flex items-center gap-6">
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-xl flex items-center justify-center">
                                            <div className="text-[28px]">{item.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p>
                                            <h3 className="text-xl">{item.description}</h3>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contacts;
