"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowUp
} from "react-icons/fa";

export default function Home() {
  const skills = [
    "Python",
    "SQL",
    "Machine Learning",
    "Power BI",
    "Pandas",
    "NumPy",
    "Data Visualization",
    "OOP",
    "HTML & CSS",
    "C Programming",
  ];

  return (
    <main className="min-h-screen text-white">
      <div className="fixed top-0 left-0 w-full h-[3px] z-[100] bg-gradient-to-r from-blue-500 to-yellow-400"></div>
      <div className="hero-glow top-0 left-0"></div>
      <div className="hero-glow-blue bottom-0 right-0"></div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-[#08111f]/70 px-8 py-5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold gold-text">
            Dheeraj Reddy Tiyyagura
          </h1>

          <div className="hidden md:flex gap-8 text-gray-300">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>
{/* HERO */}

<section className="max-w-7xl mx-auto px-8 py-28">

  <div className="grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT SIDE */}

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >

      <p className="text-blue-400 font-semibold tracking-widest mb-4">
        COMPUTER SCIENCE ENGINEERING (DATA SCIENCE)
      </p>

      <h1 className="text-6xl md:text-7xl font-bold leading-tight">
        Hi, I'm
        <br />
        <span className="gold-text">
          Dheeraj Reddy
        </span>
      </h1>

      <p className="mt-8 text-xl text-gray-300 max-w-3xl leading-9">
        Final-year Computer Science Engineering (Data Science)
        student passionate about Data Analytics, Machine Learning
        and Artificial Intelligence.

        I enjoy building intelligent systems and transforming
        data into meaningful insights.
      </p>

      <div className="flex flex-wrap gap-5 mt-10">

        <a
          href="/resume.pdf"
          target="_blank"
          className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold"
        >
          Download Resume
        </a>

        <a
          href="https://github.com/dheeraj6996"
          target="_blank"
          className="project-button flex items-center gap-3"
        >
          <FaGithub />
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/dheeraj-reddy-tiyyagura-183558268/"
          target="_blank"
          className="border border-yellow-500 px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-yellow-500 hover:text-black transition"
        >
          <FaLinkedin />
          LinkedIn
        </a>

      </div>

    </motion.div>


    {/* RIGHT SIDE IMAGE */}

    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex justify-center"
    >

      <div className="relative">

        <div className="absolute inset-0 bg-yellow-400 opacity-20 blur-3xl rounded-3xl"></div>

        <Image
          src="/profile.jpg"
          alt="Dheeraj Reddy"
          width={420}
          height={420}
          className="relative rounded-3xl border-2 border-yellow-400 shadow-2xl"
        />

      </div>

    </motion.div>

  </div>

</section>
      {/* ABOUT */}

      <section
        id="about"
        className="max-w-7xl mx-auto px-8 py-24"
      >
        <h2 className="section-title">
          About Me
        </h2>

        <div className="glass-card rounded-3xl p-10">

          <p className="text-gray-300 leading-9 text-lg">

            I am a B.Tech Graduate in Computer Science
            Engineering (Data Science) at CMR Technical Campus
            with a CGPA of 8.25.

            My interests revolve around Data Analytics,
            Machine Learning, Artificial Intelligence and
            building practical solutions for real-world challenges.

            Through academic projects and self-learning,
            I have gained experience in Python, SQL,
            Power BI, Pandas, OOP's, NumPy and Data Visualization.

          </p>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-8 py-10">

  <div className="grid md:grid-cols-4 gap-6">

    <div className="glass-card rounded-3xl p-8 text-center">
      <h3 className="text-4xl font-bold text-yellow-400">8.25</h3>
      <p className="text-gray-300 mt-3">CGPA</p>
    </div>

    <div className="glass-card rounded-3xl p-8 text-center">
      <h3 className="text-4xl font-bold text-yellow-400">6+</h3>
      <p className="text-gray-300 mt-3">Projects</p>
    </div>

    <div className="glass-card rounded-3xl p-8 text-center">
      <h3 className="text-4xl font-bold text-yellow-400">10+</h3>
      <p className="text-gray-300 mt-3">Certifications</p>
    </div>

    <div className="glass-card rounded-3xl p-8 text-center">
      <h3 className="text-4xl font-bold text-yellow-400">2026</h3>
      <p className="text-gray-300 mt-3">Graduate</p>
    </div>

  </div>

</section>


      {/* SKILLS */}

      <section
        id="skills"
        className="max-w-7xl mx-auto px-8 py-24"
      >

        <h2 className="section-title">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {skills.map((skill) => (

            <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
              whileHover={{
  scale: 1.05,
  y: -8
}}
              key={skill}
              className="glass-card rounded-2xl p-8 text-center"
            >
              <h3 className="font-semibold text-lg">
                {skill}
              </h3>
            </motion.div>

          ))}

        </div>

      </section>
            {/* PROJECTS */}

      <section
        id="projects"
        className="max-w-7xl mx-auto px-8 py-24"
      >

        <h2 className="section-title">
          Projects
        </h2>

        <div className="space-y-8">

          {/* Traffic Project */}

          <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
            whileHover={{
  scale: 1.05,
  y: -8
}}
            className="glass-card rounded-3xl p-10"
          >
            <h3 className="text-2xl font-bold text-yellow-400">
              Smart Traffic Accident Hotspot Prediction System
            </h3>

            <p className="mt-5 text-gray-300 leading-8">
              Built an end-to-end traffic accident analytics platform using Python, Machine Learning, and Power BI on over 7 million accident records. Implemented Random Forest and XGBoost models for accident severity prediction and geospatial hotspot detection. Achieved 81.29% accuracy using Random Forest and created interactive dashboards to generate actionable road safety insights.
            </p>

            <a
              href="https://github.com/dheeraj6996/Smart-Traffic-Accident-Hotspot-Prediction-System"
              target="_blank"
              className="project-button inline-block mt-6"
            >
              View GitHub
            </a>
          </motion.div>



          {/* Agriculture */}

          <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
            whileHover={{
  scale: 1.05,
  y: -8
}}
            className="glass-card rounded-3xl p-10"
          >
            <h3 className="text-2xl font-bold text-yellow-400">
              AI-Integrated Decision Support System for Smart Agriculture
            </h3>

            <p className="mt-5 text-gray-300 leading-8">
              Developed an AI-driven decision support system for crop recommendation, fertilizer prediction, soil fertility analysis, plant disease detection, and rural development planning. Applied Random Forest, Decision Tree, and CNN models to support data-driven agricultural practices and village infrastructure development. The research work was published in the IJNRD Journal.
            </p>

            <a
              href="https://github.com/dheeraj6996/AI-Integrated-Decision-Support-System-for-Smart-Agriculture"
              target="_blank"
              className="project-button inline-block mt-6"
            >
              View GitHub
            </a>
          </motion.div>



          {/* Deepfake */}

          <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
            whileHover={{
  scale: 1.05,
  y: -8
}}
            className="glass-card rounded-3xl p-10"
          >
            <h3 className="text-2xl font-bold text-yellow-400">
              Deepfake Detection on Social Media
            </h3>

            <p className="mt-5 text-gray-300 leading-8">
              Designed a deep learning-based system to identify machine-generated tweets and combat online misinformation. Leveraged FastText embeddings along with CNN-LSTM architectures and multiple classification techniques to distinguish manipulated content. The project contributes to improving authenticity and trust in digital interactions.
            </p>

            <a
              href="https://github.com/dheeraj6996/Deepfake-Detection-on-social-media-leveraging-deep-learning-Fast-text-embeddings-"
              target="_blank"
              className="project-button inline-block mt-6"
            >
              View GitHub
            </a>
          </motion.div>



          {/* Sleep Detection */}

          <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
            whileHover={{
  scale: 1.05,
  y: -8
}}
            className="glass-card rounded-3xl p-10"
          >
            <h3 className="text-2xl font-bold text-yellow-400">
              Sleep Detection Glasses
            </h3>

            <p className="mt-5 text-gray-300 leading-8">
              Developed a hardware-based driver safety system using Arduino and sensor technologies to monitor drowsiness in real time. The prototype detects signs of fatigue and triggers alerts to help prevent accidents. Built with a focus on improving road safety and reducing driver-related risks.

              Built as a physical prototype to improve road safety.
            </p>

          </motion.div>



          {/* Telecom */}

          <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
            whileHover={{
  scale: 1.05,
  y: -8
}}
            className="glass-card rounded-3xl p-10"
          >
            <h3 className="text-2xl font-bold text-yellow-400">
              ChurnSense – Telecom Churn Analysis
            </h3>

            <p className="mt-5 text-gray-300 leading-8">
              Built a customer analytics solution to study telecom churn patterns and understand factors influencing customer retention. Performed data preprocessing, exploratory analysis, and visualization using Python to generate business insights. The project helps organizations identify high-risk customers and improve retention strategies.
            </p>

            <a
              href="https://github.com/dheeraj6996/ChurnSense-telecom-churn-analysis"
              target="_blank"
              className="project-button inline-block mt-6"
            >
              View GitHub
            </a>
          </motion.div>



          {/* IPL */}

          <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
            whileHover={{
  scale: 1.05,
  y: -8
}}
            className="glass-card rounded-3xl p-10"
          >
            <h3 className="text-2xl font-bold text-yellow-400">
              IPL Match Winner Prediction
            </h3>

            <p className="mt-5 text-gray-300 leading-8">
              Developed a machine learning model to predict IPL match outcomes using historical match data and team performance statistics. Applied data preprocessing and predictive analytics techniques to analyze patterns across seasons. The project demonstrates practical applications of machine learning in sports analytics.

            </p>

            <a
              href="https://github.com/dheeraj6996/IPL-Match-Winner-Prediction"
              target="_blank"
              className="project-button inline-block mt-6"
            >
              View GitHub
            </a>
          </motion.div>

        </div>

      </section>
{/* CERTIFICATIONS */}

<section className="max-w-7xl mx-auto px-8 py-24">

  <h2 className="section-title">
    Certifications & Professional Development
  </h2>

  {/* TOP CERTIFICATIONS */}

  <div className="grid md:grid-cols-2 gap-8 mb-12">

    <div className="glass-card rounded-3xl p-8">
      <h3 className="text-xl font-bold text-yellow-400">
        Salesforce Certified Agentforce Specialist
      </h3>
      <p className="mt-4 text-gray-300">
        Salesforce • AI Agent Development
      </p>
    </div>

    <div className="glass-card rounded-3xl p-8">
      <h3 className="text-xl font-bold text-yellow-400">
        Google Cloud Career Launchpad – Data Analyst Track
      </h3>
      <p className="mt-4 text-gray-300">
        Google Cloud • Data Analytics
      </p>
    </div>

    <div className="glass-card rounded-3xl p-8">
      <h3 className="text-xl font-bold text-yellow-400">
        Generative AI by Google Cloud (24 Skill Badges)
      </h3>
      <p className="mt-4 text-gray-300">
        Google Cloud • L4G Program
      </p>
    </div>

    <div className="glass-card rounded-3xl p-8">
      <h3 className="text-xl font-bold text-yellow-400">
        Accenture Data Analytics & Visualization Job Simulation
      </h3>
      <p className="mt-4 text-gray-300">
        Forage • Data Analytics
      </p>
    </div>

    <div className="glass-card rounded-3xl p-8">
      <h3 className="text-xl font-bold text-yellow-400">
        Meta Data Analyst Professional Certificate
      </h3>
      <p className="mt-4 text-gray-300">
        Coursera • Meta
      </p>
    </div>

    <div className="glass-card rounded-3xl p-8">
      <h3 className="text-xl font-bold text-yellow-400">
        Cisco Cyber Threat Management
      </h3>
      <p className="mt-4 text-gray-300">
        Cisco Networking Academy
      </p>
    </div>

    <div className="glass-card rounded-3xl p-8">
      <h3 className="text-xl font-bold text-yellow-400">
        IBM Python 101 for Data Science
      </h3>
      <p className="mt-4 text-gray-300">
        IBM SkillsBuild
      </p>
    </div>

    <div className="glass-card rounded-3xl p-8">
      <h3 className="text-xl font-bold text-yellow-400">
        Wipro Digital Skills Readiness Program
      </h3>
      <p className="mt-4 text-gray-300">
        Wipro • talentnext
      </p>
    </div>

    <div className="glass-card rounded-3xl p-8">
      <h3 className="text-xl font-bold text-yellow-400">
        JPMorgan Investment Banking Job Simulation
      </h3>
      <p className="mt-4 text-gray-300">
        Forage • Financial Analysis
      </p>
    </div>

    <div className="glass-card rounded-3xl p-8">
      <h3 className="text-xl font-bold text-yellow-400">
        IIT Bombay C Training Certification
      </h3>
      <p className="mt-4 text-gray-300">
        IIT Bombay
      </p>
    </div>

  </div>


  {/* ADDITIONAL CERTIFICATIONS */}

  <div className="glass-card rounded-3xl p-10">

    <h3 className="text-2xl font-bold text-yellow-400 mb-8">
      Additional Certifications
    </h3>

    <div className="grid md:grid-cols-2 gap-4 text-gray-300">

      <p>• Infosys Springboard – Introduction to Data Science</p>

      <p>• Cisco CSS Essentials</p>

      <p>• Alteryx HexaCert Certifications</p>

      <p>• HP Life Data Science & Analytics Certification</p>

      <p>• NPTEL English Language for Competitive Exams</p>

      <p>• Data Science – Power BI</p>

      <p>• CMRIT Model United Nations Participation Certificate</p>

    </div>

  </div>

</section>

            {/* EDUCATION */}

      <section className="max-w-7xl mx-auto px-8 py-24">

        <h2 className="section-title">
          Education
        </h2>

        <div className="space-y-8">

          {/* B.Tech */}

          <div className="glass-card rounded-3xl p-10">

            <h3 className="text-2xl font-bold text-yellow-400">
              CMR Technical Campus
            </h3>

            <p className="mt-5 text-gray-300 leading-8">
              Bachelor of Technology (B.Tech)
              <br />
              Computer Science Engineering (Data Science)
              <br />
              2022 – 2026
              <br />
              CGPA: 8.25 / 10
              <br /><br />

              Relevant Coursework:
              <br />
              Machine Learning, Data Analytics,
              Data Visualization, OOP, DBMS.
            </p>

          </div>



          {/* Intermediate */}

          <div className="glass-card rounded-3xl p-10">

            <h3 className="text-2xl font-bold text-yellow-400">
              Narayana Junior College
            </h3>

            <p className="mt-5 text-gray-300 leading-8">
              Intermediate (MPC)
              <br />
              2020 – 2022
              <br />
              Percentage: 70.7%
            </p>

          </div>



          {/* School */}

          <div className="glass-card rounded-3xl p-10">

            <h3 className="text-2xl font-bold text-yellow-400">
              Sri Chaitanya School
            </h3>

            <p className="mt-5 text-gray-300 leading-8">
              Secondary School Education (Class X)
              <br />
              2020
              <br />
              GPA: 10 / 10
            </p>

          </div>

        </div>

      </section>

            {/* ACHIEVEMENTS */}

      

      <section className="max-w-7xl mx-auto px-8 py-24">
        

        <h2 className="section-title">
          Leadership & Achievements
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="glass-card rounded-3xl p-10">
            <h3 className="text-2xl font-bold text-yellow-400">
              Core Member — Lexis Club
            </h3>

            <p className="mt-5 text-gray-300 leading-8">
              Served as a core member at CMR Technical Campus and
              contributed to organizing literary events and
              student engagement activities.
            </p>
          </div>


          <div className="glass-card rounded-3xl p-10">
            <h3 className="text-2xl font-bold text-yellow-400">
              Data Science Project Portfolio
            </h3>

            <p className="mt-5 text-gray-300 leading-8">
              Developed multiple projects in Machine Learning,
              Artificial Intelligence and Data Analytics covering
              real-world domains such as agriculture, road safety,
              social media and customer retention.
            </p>
          </div>


          <div className="glass-card rounded-3xl p-10">
            <h3 className="text-2xl font-bold text-yellow-400">
              IJNRD Publication
            </h3>

            <p className="mt-5 text-gray-300 leading-8">
              Published research work on AI-integrated smart
              agriculture systems focusing on crop recommendation,
              soil analysis and disease detection aswell as a village development system for better rural connectivity.
            </p>
          </div>


          <div className="glass-card rounded-3xl p-10">
            <h3 className="text-2xl font-bold text-yellow-400">
              Continuous Learner
            </h3>

            <p className="mt-5 text-gray-300 leading-8">
              Actively pursuing certifications and continuously
              improving skills in Data Analytics, Machine Learning,
              Cloud Computing and Artificial Intelligence.
            </p>
          </div>

        </div>

      </section>


      {/* CONTACT */}

      <section
        id="contact"
        className="max-w-7xl mx-auto px-8 py-24"
      >

        <div className="w-16 h-1 bg-yellow-400 mb-6 rounded-full"></div>

        <h2 className="section-title">
          Contact
        </h2>

        <div className="glass-card rounded-3xl p-10">

          <div className="space-y-8 text-gray-300 text-lg">

            {/* Email */}

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-yellow-400 text-2xl" />
              <p>dheerajreddy700@gmail.com</p>
            </div>


            {/* Phone */}

            <div className="flex items-center gap-4">
              <FaPhone className="text-yellow-400 text-2xl" />
              <p>+91 9848172466</p>
            </div>


            {/* Location */}

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-yellow-400 text-2xl" />
              <p>Hyderabad, Telangana, India</p>
            </div>


            {/* Buttons */}

            <div className="flex flex-wrap gap-5 pt-8">

              <a
                href="https://github.com/dheeraj6996"
                target="_blank"
                className="project-button flex items-center gap-3 font-semibold"
              >
                <FaGithub />
                GitHub
              </a>


              <a
                href="https://www.linkedin.com/in/dheeraj-reddy-tiyyagura-183558268/"
                target="_blank"
                className="border border-yellow-500 px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-yellow-500 hover:text-black transition duration-300"
              >
                <FaLinkedin />
                LinkedIn
              </a>

            </div>

          </div>

        </div>

      </section>


<footer className="border-t border-white/10 py-12 text-center text-gray-400">

  <div className="space-y-3">

    <h3 className="text-xl font-bold gold-text">
      Dheeraj Reddy
    </h3>

    <p>
      Computer Science Engineering (Data Science)
    </p>

    <p>
      Transforming Data into Meaningful Insights
    </p>

    <p className="text-sm text-gray-500">
      Built with Next.js • TypeScript • Tailwind CSS
    </p>

  </div>

</footer>
      

    </main>
  );
}
