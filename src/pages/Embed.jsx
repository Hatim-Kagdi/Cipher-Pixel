// src/pages/Embed.jsx
import EmbedForm from '../components/EmbedForm';

function Embed() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-blue-700 mb-8">Embed Message into Image</h2>
        <EmbedForm />
      </div>
    </section>
  );
}

export default Embed;
