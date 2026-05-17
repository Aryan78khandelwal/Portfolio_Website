import React, { useState } from 'react';
import { motion } from 'motion/react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Identity required';
    if (!formData.email.trim()) {
      newErrors.email = 'Frequency required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid frequency format';
    }
    if (!formData.message.trim()) newErrors.message = 'Signal required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {

      // 1. Prepare the data for Web3Forms
      const submissionData = {
        ...formData
      };

      try {
        // 2. Send the data
        const response = await fetch("https://formspree.io/f/xdajnpoz", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(submissionData)
        });

        const result = await response.json();

        if (response.ok) {
          // 3. Success! Show the submitted state and clear form
          setSubmitted(true);
          setErrors({});
          setFormData({ name: '', email: '', message: '' });
        } else {
          console.error("Submission failed", result);
          alert("Something went wrong. Please try again.");
        }
      } catch (error) {
        console.error("Network error", error);
      }

    } else {
      setErrors(validationErrors);
    }
  };


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-8 md:px-20 bg-black text-white min-h-screen flex flex-col justify-center border-t border-white/10">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
        <div className="flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] tracking-[0.4em] uppercase opacity-50 block mb-8">Initialize Connection</span>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-light uppercase tracking-tight mb-8">GET IN <br /><span className="font-black italic">TOUCH_</span></h2>
            <p className="font-mono text-xs uppercase opacity-40 max-w-sm leading-relaxed">
              Available for engineering roles, tech consulting, and creative collaborations.
            </p>
          </motion.div>

          <div className="hidden md:block">
            <div className="text-[120px] font-black opacity-5 select-none leading-none tracking-tighter rotate-[-90deg] origin-left translate-y-20">
              CONTACT
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white text-black p-8 md:p-12 shadow-[16px_16px_0px_white/10]"
        >
          {submitted ? (
            <div className="h-full flex flex-col justify-center gap-6 min-h-[400px]">
              <h3 className="text-5xl font-black uppercase tracking-tighter italic">Signal Received.</h3>
              <p className="font-mono text-xs uppercase opacity-60">I will calibrate my response and get back to you shortly.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 bg-black text-white p-6 text-sm font-black uppercase tracking-[0.2em] hover:bg-zinc-800 transition-all cursor-none"
                data-cursor="hover"
              >
                Send another signal
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-10">
              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold">01 / Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="ANONYMOUS"
                  className={`bg-transparent border-b ${errors.name ? 'border-red-500' : 'border-black/20'} p-2 text-xs uppercase tracking-[0.2em] focus:outline-none focus:border-black placeholder:opacity-20`}
                />
                {errors.name && <span className="text-[10px] text-red-500 font-mono italic">{errors.name}</span>}
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold">02 / Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="USER@NETWORK.COM"
                  className={`bg-transparent border-b ${errors.email ? 'border-red-500' : 'border-black/20'} p-2 text-xs uppercase tracking-[0.2em] focus:outline-none focus:border-black placeholder:opacity-20`}
                />
                {errors.email && <span className="text-[10px] text-red-500 font-mono italic">{errors.email}</span>}
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold">03 / Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="HOW CAN I HELP?"
                  rows="4"
                  className={`bg-transparent border-b ${errors.message ? 'border-red-500' : 'border-black/20'} p-2 text-xs uppercase tracking-[0.2em] focus:outline-none focus:border-black placeholder:opacity-20 resize-none`}
                />
                {errors.message && <span className="text-[10px] text-red-500 font-mono italic">{errors.message}</span>}
              </div>

              <button
                type="submit"
                className="mt-4 bg-black text-white p-6 text-sm font-black uppercase tracking-[0.2em] hover:bg-zinc-800 transition-all cursor-none"
                data-cursor="hover"
              >
                Transmit Signal
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
