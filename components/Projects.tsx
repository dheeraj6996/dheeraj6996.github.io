export default function Projects() {
  return (
    <section className="px-10 py-20">
      <h2 className="text-3xl font-bold mb-8">
        Projects
      </h2>

      <div className="space-y-6">

        <div className="bg-[#121b2c] p-6 rounded-xl">
          <h3 className="text-xl font-semibold">
            Deepfake Detection on Social Media
          </h3>

          <p className="mt-3 text-gray-300">
            CNN-LSTM model with FastText embeddings for detecting manipulated media.
          </p>
        </div>

        <div className="bg-[#121b2c] p-6 rounded-xl">
          <h3 className="text-xl font-semibold">
            Smart Traffic Accident Prediction
          </h3>

          <p className="mt-3 text-gray-300">
            Machine learning project using 7M+ records with Random Forest.
          </p>
        </div>

        <div className="bg-[#121b2c] p-6 rounded-xl">
          <h3 className="text-xl font-semibold">
            AI Integrated Smart Agriculture System
          </h3>

          <p className="mt-3 text-gray-300">
            Crop recommendation, fertilizer prediction and disease detection.
          </p>
        </div>

      </div>
    </section>
  );
}