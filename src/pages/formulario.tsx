import React, { useState } from "react";

const Formulario = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("/api", {
      method: "POST",
      body: JSON.stringify({ nome, email }),
    });
    setNome("");
    setEmail("");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-9">Formulário</h1>
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col gap-4 w-1/2 bg-gray-100 p-4 rounded-md"
      >
        <input
          type="text"
          value={nome}
          name="nome"
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome"
          className="border-2 border-gray-300 rounded-md p-2 text-black"
        />
        <input
          type="email"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="border-2 border-gray-300 rounded-md p-2 text-black"
        />
        <button type="submit" className="bg-blue-500 p-2 rounded-md">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Formulario;
