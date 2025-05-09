// src/pages/Extract.jsx
import ExtractForm from '../components/ExtractForm';

function Extract() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-blue-700 mb-8">Extract Message from Image</h2>
        <ExtractForm />
      </div>
    </section>
  );
}

export default Extract;
