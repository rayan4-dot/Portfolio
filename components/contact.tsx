"use client"

import type React from "react"

import { useState, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useToast } from "@/hooks/use-toast"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: false }))
    }
  }

  const validateForm = () => {
    const newErrors = {
      name: formData.name.trim().length < 2,
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      message: formData.message.trim().length < 10,
    }

    setErrors(newErrors)
    return !Object.values(newErrors).some((error) => error)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate sending email (replace with actual EmailJS implementation)
    try {
      // In a real implementation, you would use EmailJS here
      await new Promise((resolve) => setTimeout(resolve, 1500)) // Simulate network request

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      })

      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or email me directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-400 mx-auto mb-6"></div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Reach out to me!
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-slate-800/70 backdrop-blur p-8 rounded-2xl gradient-border"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-slate-300 mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={`bg-slate-700 border-slate-600 ${errors.name ? "border-red-400" : ""}`}
                  aria-required="true"
                  aria-describedby="name-error"
                />
                {errors.name && (
                  <div id="name-error" className="text-red-400 text-sm mt-1">
                    Name must be at least 2 characters.
                  </div>
                )}
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-slate-300 mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className={`bg-slate-700 border-slate-600 ${errors.email ? "border-red-400" : ""}`}
                  aria-required="true"
                  aria-describedby="email-error"
                />
                {errors.email && (
                  <div id="email-error" className="text-red-400 text-sm mt-1">
                    Please enter a valid email.
                  </div>
                )}
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-slate-300 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Your message"
                  className={`bg-slate-700 border-slate-600 ${errors.message ? "border-red-400" : ""}`}
                  aria-required="true"
                  aria-describedby="message-error"
                />
                {errors.message && (
                  <div id="message-error" className="text-red-400 text-sm mt-1">
                    Message must be at least 10 characters.
                  </div>
                )}
              </div>
              <Button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-blue-600 to-emerald-400 hover:from-blue-700 hover:to-emerald-500"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="flex flex-col justify-between"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-slate-800/70 backdrop-blur p-8 rounded-2xl gradient-border">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Contact Information</h3>
              <address className="space-y-6 not-italic">
                {/* Email */}
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mr-4 transition-transform group-hover:scale-110">
                    <span className="text-xl" aria-hidden="true">
                      📧
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-white">Email</h4>
                    <p className="text-slate-300">
                      <Link
                        href="mailto:rayan.elguerdaoui1@gmail.com"
                        className="hover:text-blue-400 transition-colors"
                        aria-label="Send email to Rayan Elguerdaoui"
                      >
                        rayan.elguerdaoui1@gmail.com
                      </Link>
                    </p>
                  </div>
                </div>
                {/* Location */}
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mr-4 transition-transform group-hover:scale-110">
                    <span className="text-xl" aria-hidden="true">
                      📍
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-white">Location</h4>
                    <p className="text-slate-300">Marrakesh, Morocco</p>
                  </div>
                </div>
                {/* Download CV */}
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mr-4 transition-transform group-hover:scale-110">
                    <span className="text-xl" aria-hidden="true">
                      📄
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-white mb-2">Download CV</h4>
                    <Button
                      asChild
                      className="rounded-full bg-gradient-to-r from-blue-600 to-emerald-400 hover:from-blue-700 hover:to-emerald-500"
                    >
                      <Link href="/cv.pdf" download aria-label="Download Rayan Elguerdaoui's CV">
                        Download Now
                      </Link>
                    </Button>
                  </div>
                </div>
              </address>
            </div>
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                <Link
                  href="https://github.com/rayan4-dot"
                  className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label="Visit Rayan's GitHub profile"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/rayan-elguerdaoui/"
                  className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label="Visit Rayan's LinkedIn profile"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
