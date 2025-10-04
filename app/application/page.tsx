"use client";

import { useState } from "react";

export default function Application() {
  const [form, setForm] = useState({ name: "", budget: "", product: "", description: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Заявка отправлена!");
  };

  return (
    <main className="min-h-screen bg-black text-white p-4">
      <h1 className="text-2xl text-red-600 font-bold mb-4">Оставить заявку</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input name="name" placeholder="Ваше имя" className="w-full p-2 rounded bg-zinc-900 border border-red-600" onChange={handleChange} />
        <input name="budget" placeholder="Бюджет" className="w-full p-2 rounded bg-zinc-900 border border-red-600" onChange={handleChange} />
        <input name="product" placeholder="Сфера бизнеса" className="w-full p-2 rounded bg-zinc-900 border border-red-600" onChange={handleChange} />
        <textarea name="description" placeholder="Описание проекта" className="w-full p-2 rounded bg-zinc-900 border border-red-600" onChange={handleChange} />
        <button type="submit" className="w-full bg-red-600 p-2 rounded">Отправить</button>
      </form>
    </main>
  );
}
