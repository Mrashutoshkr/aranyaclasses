import React, { useState } from 'react';
import { Target, Lightbulb, BookOpen, GraduationCap } from 'lucide-react';

const SyllabusMilestones: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sainik' | 'class345' | 'class6' | 'class7' | 'class8'>('sainik');

  const tabs = [
    { id: 'sainik', label: 'Sainik School', icon: Target },
    { id: 'class345', label: 'Primary (3-5)', icon: Lightbulb },
    { id: 'class6', label: 'Class 6', icon: BookOpen },
    { id: 'class7', label: 'Class 7', icon: BookOpen },
    { id: 'class8', label: 'Class 8', icon: GraduationCap },
  ];

  return (
    <div className="page-content max-w-6xl mx-auto px-6 pt-40 pb-40 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-orange-500 font-bold tracking-[0.4em] uppercase text-xs mb-3">Academic Structure</h2>
        <h1 className="text-white text-6xl font-cinzel mb-8">Detailed Curriculum</h1>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mt-10 p-2 glass rounded-full border border-white/5 w-fit mx-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-8 py-3 rounded-full font-bold transition-all flex items-center gap-3 ${activeTab === tab.id
                    ? 'bg-orange-500 text-white shadow-[0_0_20px_rgba(244,157,26,0.6)]'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                <Icon size={18} />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="glass p-10 md:p-14 rounded-[3rem] border border-white/10 shadow-2xl min-h-[500px]">

        {/* Sainik School Content */}
        {activeTab === 'sainik' && (
          <div className="space-y-6 text-gray-300 leading-relaxed text-lg animate-in fade-in zoom-in duration-500">
            <div className="bg-orange-500/10 border border-orange-500/30 p-8 rounded-3xl mb-10 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 blur-3xl rounded-full"></div>
              <h2 className="text-white text-4xl font-cinzel mb-2">अरन्या क्लासेस - आरा (बिहार)</h2>
              <p className="text-orange-400 text-2xl font-bold mb-4">सैनिक स्कूल में एडमिशन की 100% गारंटीड तैयारी!</p>
              <p className="text-white font-medium max-w-3xl mx-auto">
                क्या आपका बच्चा सैनिक स्कूल में दाखिला लेकर देश की सेवा करना चाहता है?
                अरन्या क्लासेस आरा में कक्षा 6 और 9 के लिए AISSEE प्रवेश परीक्षा की विशेष कोचिंग शुरू! हम NCERT आधारित सिलेबस पर गणित, हिंदी/अंग्रेजी, इंटेलिजेंस, सामान्य विज्ञान और GK कवर करते हैं।
              </p>
            </div>

            <h3 className="text-2xl text-white font-cinzel border-b border-white/10 pb-3 mb-6 font-bold text-orange-500">हमारी विशेषताएं</h3>
            <ul className="grid md:grid-cols-2 gap-6 mb-10">
              <li className="glass p-6 rounded-2xl border-white/5"><strong className="text-white block mb-1">👨‍🏫 अनुभवी फैकल्टी:</strong> पूर्व सैनिक स्कूल कोचिंग विशेषज्ञों द्वारा पढ़ाई।</li>
              <li className="glass p-6 rounded-2xl border-white/5"><strong className="text-white block mb-1">📝 साप्ताहिक मॉक टेस्ट:</strong> पिछले 10 वर्षों के पेपर सॉल्यूशन और टाइम मैनेजमेंट ट्रेनिंग।</li>
              <li className="glass p-6 rounded-2xl border-white/5"><strong className="text-white block mb-1">📚 स्टडी मटेरियल:</strong> फ्री नोट्स, वर्कशीट्स और फ्लैशकार्ड्स।</li>
              <li className="glass p-6 rounded-2xl border-white/5"><strong className="text-white block mb-1">🏃 फिजिकल ट्रेनिंग:</strong> दौड़, योग और मेडिकल टेस्ट की तैयारी।</li>
              <li className="glass p-6 rounded-2xl border-white/5"><strong className="text-white block mb-1">🏫 ऑनलाइन/ऑफलाइन बैच:</strong> सुबह 6 बजे से शुरू, छोटे बैच (15 छात्र)।</li>
            </ul>

            <h3 className="text-2xl text-white font-cinzel border-b border-white/10 pb-3 mb-6 font-bold text-orange-500">सफलता की गारंटी</h3>
            <ul className="space-y-3 mb-12 pl-4">
              <li className="flex gap-3 items-center"><Target size={20} className="text-orange-500" /> <span className="text-white">90% छात्रों का सिलेक्शन</span> पिछले वर्ष।</li>
              <li className="flex gap-3 items-center"><Target size={20} className="text-orange-500" /> <span className="text-white">कमजोर विषयों पर स्पेशल फोकस:</span> रोज रिवीजन और डाउट क्लीयरिंग।</li>
              <li className="flex gap-3 items-center"><Target size={20} className="text-orange-500" /> <span className="text-white">फीस:</span> मात्र ₹5000 (6 महीने), स्कॉलरशिप उपलब्ध।</li>
            </ul>

            <div className="text-center p-8 bg-black/40 rounded-3xl border border-white/10">
              <p className="text-2xl text-white font-cinzel mb-4">तुरंत संपर्क करें</p>
              <p className="text-gray-400">अरन्या क्लासेस, आरा (बिहार)</p>
              <div className="flex justify-center gap-8 mt-4 font-bold text-xl">
                <p className="text-white text-orange-400">फोन: 7763093175</p>
                <p className="text-green-400">WhatsApp: 7763093175</p>
              </div>
            </div>
          </div>
        )}

        {/* Classes 3, 4, 5 Content */}
        {activeTab === 'class345' && (
          <div className="space-y-12 text-gray-300 leading-relaxed animate-in fade-in zoom-in duration-500">
            <div className="text-center mb-10">
              <h2 className="text-4xl text-white font-cinzel mb-2">Annual Syllabus 2026-27</h2>
              <p className="text-orange-500 tracking-widest uppercase font-bold text-sm">Classes 3, 4 & 5</p>
              <p className="text-gray-400 mt-2">📍 Ara, Bihar | CBSE/NCERT/DAV Aligned | April 2026 - March 2027</p>
            </div>

            <section>
              <h3 className="text-3xl text-orange-500 font-cinzel mb-6 flex items-center gap-3"><span className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl">3</span> CLASS 3 </h3>
              <div className="overflow-x-auto rounded-2xl border border-white/10">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-white/10 text-white">
                      <th className="p-4 border border-white/10">Subject</th>
                      <th className="p-4 border border-white/10">Quarter 1 (Apr-Jun)</th>
                      <th className="p-4 border border-white/10">Quarter 2 (Jul-Sep)</th>
                      <th className="p-4 border border-white/10">Quarter 3 (Oct-Dec)</th>
                      <th className="p-4 border border-white/10">Quarter 4 (Jan-Mar)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-4 border border-white/10 text-white font-bold bg-white/5">English</td>
                      <td className="p-4 border border-white/10">Alphabet, Sentences, "Thirsty Crow"</td>
                      <td className="p-4 border border-white/10">Comprehension, Rhymes, Opposites</td>
                      <td className="p-4 border border-white/10">Paragraphs, Tenses, Picture Comp.</td>
                      <td className="p-4 border border-white/10">Conversation, Revision</td>
                    </tr>
                    <tr>
                      <td className="p-4 border border-white/10 text-white font-bold bg-white/5">Hindi</td>
                      <td className="p-4 border border-white/10">वर्णमाला, मात्राएँ, "चालाक खरगोश"</td>
                      <td className="p-4 border border-white/10">संज्ञा-क्रिया, दो शब्द वाक्य</td>
                      <td className="p-4 border border-white/10">वर्ण विघटन, त्योहार निबंध</td>
                      <td className="p-4 border border-white/10">अनुच्छेद, पठन बोध</td>
                    </tr>
                    <tr>
                      <td className="p-4 border border-white/10 text-white font-bold bg-white/5">Maths</td>
                      <td className="p-4 border border-white/10">Numbers 1-1000, Shapes, Add/Sub</td>
                      <td className="p-4 border border-white/10">Tables 2-5, Time, Fractions</td>
                      <td className="p-4 border border-white/10">Division, Money, Patterns</td>
                      <td className="p-4 border border-white/10">Data handling, Geometry</td>
                    </tr>
                    <tr>
                      <td className="p-4 border border-white/10 text-white font-bold bg-white/5">EVS</td>
                      <td className="p-4 border border-white/10">Living/Non-living, Family, Plants</td>
                      <td className="p-4 border border-white/10">Food, Water cycle, Safety</td>
                      <td className="p-4 border border-white/10">Transport, Festivals, Locality</td>
                      <td className="p-4 border border-white/10">Human body, Environment</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h3 className="text-3xl text-orange-500 font-cinzel mb-6 flex items-center gap-3"><span className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl">4</span> CLASS 4</h3>
              <div className="overflow-x-auto rounded-2xl border border-white/10">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-white/10 text-white">
                      <th className="p-4 border border-white/10 w-1/4">Subject</th>
                      <th className="p-4 border border-white/10">Key Topics & Skills</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="p-4 border border-white/10 text-white font-bold bg-white/5">English</td><td className="p-4 border border-white/10">Nouns/Pronouns, Tenses, Story writing, Letters, "Nature's Way" poem</td></tr>
                    <tr><td className="p-4 border border-white/10 text-white font-bold bg-white/5">Hindi</td><td className="p-4 border border-white/10">मुहावरे, सर्वनाम, पत्र लेखन, "शेर और चूहा", निबंध (मेरा गाँव)</td></tr>
                    <tr><td className="p-4 border border-white/10 text-white font-bold bg-white/5">Maths</td><td className="p-4 border border-white/10">Numbers to 10,000, Fractions, Geometry, Perimeter/Area</td></tr>
                    <tr><td className="p-4 border border-white/10 text-white font-bold bg-white/5">Science</td><td className="p-4 border border-white/10">Plants growth, Digestion, Force/Motion, Water cycle experiments</td></tr>
                    <tr><td className="p-4 border border-white/10 text-white font-bold bg-white/5">Social Science</td><td className="p-4 border border-white/10">Maps, Community helpers, Ancient India, Bihar landmarks</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h3 className="text-3xl text-orange-500 font-cinzel mb-6 flex items-center gap-3"><span className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl">5</span> CLASS 5</h3>
              <div className="overflow-x-auto rounded-2xl border border-white/10">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-white/10 text-white">
                      <th className="p-4 border border-white/10 w-1/4">Subject</th>
                      <th className="p-4 border border-white/10">Key Topics & Skills</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="p-4 border border-white/10 text-white font-bold bg-white/5">English</td><td className="p-4 border border-white/10">All Tenses, Voice, Essays (Pollution), Debate, Idioms</td></tr>
                    <tr><td className="p-4 border border-white/10 text-white font-bold bg-white/5">Hindi</td><td className="p-4 border border-white/10">संधि-समास, अलंकार, पंचतंत्र कथाएँ, नाटक लेखन</td></tr>
                    <tr><td className="p-4 border border-white/10 text-white font-bold bg-white/5">Maths</td><td className="p-4 border border-white/10">BODMAS, Percentages, HCF/LCM, Algebra basics, Volume</td></tr>
                    <tr><td className="p-4 border border-white/10 text-white font-bold bg-white/5">Science</td><td className="p-4 border border-white/10">Life cycles, Light/Shadows, Energy forms, Weather</td></tr>
                    <tr><td className="p-4 border border-white/10 text-white font-bold bg-white/5">Social Science</td><td className="p-4 border border-white/10">Freedom Struggle, Democracy, Resources, Bihar Geography</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <div className="mt-12 bg-white/5 border border-orange-500/20 p-8 rounded-3xl">
              <h3 className="text-2xl text-white font-cinzel mb-4 text-center">✨ Smart Features</h3>
              <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <p className="flex gap-2">✅ Weekly worksheets & homework</p>
                <p className="flex gap-2">✅ Parent progress updates via WhatsApp</p>
                <p className="flex gap-2">✅ Activity-based learning</p>
                <p className="flex gap-2">✅ Olympiad preparation</p>
                <p className="flex gap-2 text-orange-400 font-bold">✅ Bihar culture & local context integrated</p>
              </div>
            </div>
          </div>
        )}

        {/* Class 6 */}
        {activeTab === 'class6' && (
          <div className="space-y-10 text-gray-300 leading-relaxed animate-in fade-in zoom-in duration-500">
            <h2 className="text-4xl text-white font-cinzel mb-8 text-center">Class 6 Syllabus</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass p-8 rounded-3xl border border-white/5">
                <h3 className="text-2xl font-bold text-orange-500 mb-4 border-b border-white/10 pb-2">📐 Maths</h3>
                <ul className="list-disc pl-5 space-y-2 text-[15px]">
                  <li>Knowing our numbers: Large numbers, estimation</li>
                  <li>Whole numbers: Number line, properties</li>
                  <li>Playing with numbers: Factors, HCF, LCM</li>
                  <li>Integers, Fractions and Decimals</li>
                  <li>Mensuration: Perimeter and area basics</li>
                  <li>Data handling, Basic geometrical ideas</li>
                  <li>Algebra: Simple expressions and equations</li>
                </ul>
              </div>

              <div className="glass p-8 rounded-3xl border border-white/5">
                <h3 className="text-2xl font-bold text-orange-500 mb-4 border-b border-white/10 pb-2">🧬 Science</h3>
                <ul className="list-disc pl-5 space-y-2 text-[15px]">
                  <li>Food components and balanced diet</li>
                  <li>Fibre to fabric and sorting materials</li>
                  <li>Separation of substances, changes around us</li>
                  <li>Living organisms and their adaptations</li>
                  <li>Body parts, movements and plant functions</li>
                  <li>Light, electrical circuits, water and air</li>
                </ul>
              </div>

              <div className="glass p-8 rounded-3xl border border-white/5">
                <h3 className="text-2xl font-bold text-orange-500 mb-4 border-b border-white/10 pb-2">🌍 Social Science</h3>
                <ul className="list-disc pl-5 space-y-2 text-[15px]">
                  <li><strong>History:</strong> Early humans, Indus Valley, Vedic age, early kingdoms</li>
                  <li><strong>Geography:</strong> Solar System, Maps, Earth's motions, Major landforms, India's physics</li>
                  <li><strong>Civics:</strong> Diversity, Government levels, Panchayati Raj, Livelihoods</li>
                </ul>
              </div>

              <div className="glass p-8 rounded-3xl border border-white/5">
                <h3 className="text-2xl font-bold text-orange-500 mb-4 border-b border-white/10 pb-2">📖 English</h3>
                <ul className="list-disc pl-5 space-y-2 text-[15px]">
                  <li><strong>Grammar:</strong> Parts of speech, Tenses (simple/continuous/perfect basics), Modals</li>
                  <li><strong>Literature:</strong> Short stories, moral poems, comprehension passages</li>
                  <li><strong>Writing:</strong> Paragraphs, Notices, Informal letters, Messages</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Class 7 */}
        {activeTab === 'class7' && (
          <div className="space-y-10 text-gray-300 leading-relaxed animate-in fade-in zoom-in duration-500">
            <h2 className="text-4xl text-white font-cinzel mb-8 text-center">Class 7 Syllabus</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass p-8 rounded-3xl border border-white/5">
                <h3 className="text-2xl font-bold text-orange-500 mb-4 border-b border-white/10 pb-2">📐 Maths</h3>
                <ul className="list-disc pl-5 space-y-2 text-[15px]">
                  <li>Integers, Fractions, Decimals operations</li>
                  <li>Simple equations and Linear variables</li>
                  <li>Lines, angles, and properties of triangles</li>
                  <li>Comparing quantities: Ratio, proportion, percentages</li>
                  <li>Exponents, powers, algebraic expressions</li>
                  <li>Practical geometry and Data handling (bar graphs)</li>
                </ul>
              </div>

              <div className="glass p-8 rounded-3xl border border-white/5">
                <h3 className="text-2xl font-bold text-orange-500 mb-4 border-b border-white/10 pb-2">🧬 Science</h3>
                <ul className="list-disc pl-5 space-y-2 text-[15px]">
                  <li>Nutrition in plants and animals</li>
                  <li>Acids, bases, salts and heat transfer</li>
                  <li>Physical and chemical changes</li>
                  <li>Weather, soil composition, respiration</li>
                  <li>Reproduction in plants and motion/time</li>
                  <li>Electric current effects, light reflection</li>
                </ul>
              </div>

              <div className="glass p-8 rounded-3xl border border-white/5">
                <h3 className="text-2xl font-bold text-orange-500 mb-4 border-b border-white/10 pb-2">🌍 Social Science</h3>
                <ul className="list-disc pl-5 space-y-2 text-[15px]">
                  <li><strong>History:</strong> Delhi Sultanate, Mughals, towns, tribes, regional cultures</li>
                  <li><strong>Geography:</strong> Inside our Earth, atmosphere, water bodies, wildlife</li>
                  <li><strong>Civics:</strong> State government, media, advertising, gender equality</li>
                </ul>
              </div>

              <div className="glass p-8 rounded-3xl border border-white/5">
                <h3 className="text-2xl font-bold text-orange-500 mb-4 border-b border-white/10 pb-2">📖 English</h3>
                <ul className="list-disc pl-5 space-y-2 text-[15px]">
                  <li><strong>Grammar:</strong> Active/Passive voice, Direct/Indirect speech, Prepositions</li>
                  <li><strong>Literature:</strong> Value-based prose, poems (figures of speech)</li>
                  <li><strong>Writing:</strong> Formal/Informal letters, Diary entry, Notices, Essays</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Class 8 */}
        {activeTab === 'class8' && (
          <div className="space-y-10 text-gray-300 leading-relaxed animate-in fade-in zoom-in duration-500">
            <h2 className="text-4xl text-white font-cinzel mb-8 text-center">Class 8 Syllabus</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass p-8 rounded-3xl border border-white/5">
                <h3 className="text-2xl font-bold text-orange-500 mb-4 border-b border-white/10 pb-2">📐 Maths</h3>
                <ul className="list-disc pl-5 space-y-2 text-[15px]">
                  <li>Rational numbers, linear equations, quadrilaterals</li>
                  <li>Square roots, cube roots by prime factorisation</li>
                  <li>Algebraic expressions, identities, factorisation</li>
                  <li>Direct and inverse proportions, Exponents</li>
                  <li>Mensuration (cuboid, cylinder, surface areas)</li>
                  <li>Intro to Cartesan plane and graphs</li>
                </ul>
              </div>

              <div className="glass p-8 rounded-3xl border border-white/5">
                <h3 className="text-2xl font-bold text-orange-500 mb-4 border-b border-white/10 pb-2">🧬 Science</h3>
                <ul className="list-disc pl-5 space-y-2 text-[15px]">
                  <li>Crop production, microorganisms, synthetic fibres</li>
                  <li>Metals/non-metals, coal, petroleum, combustion</li>
                  <li>Cell structure, reproduction, reaching adolescence</li>
                  <li>Force, pressure, friction, sound waves</li>
                  <li>Chemical effects of current, light refraction, human eye</li>
                  <li>Universe and pollution concepts</li>
                </ul>
              </div>

              <div className="glass p-8 rounded-3xl border border-white/5">
                <h3 className="text-2xl font-bold text-orange-500 mb-4 border-b border-white/10 pb-2">🌍 Social Science</h3>
                <ul className="list-disc pl-5 space-y-2 text-[15px]">
                  <li><strong>History:</strong> British power, 1857 revolt, National movement, India after Independence</li>
                  <li><strong>Geography:</strong> Resources, minerals, agriculture, industries, human population</li>
                  <li><strong>Civics:</strong> Indian Constitution, secularism, parliament, judiciary, marginalisation</li>
                </ul>
              </div>

              <div className="glass p-8 rounded-3xl border border-white/5">
                <h3 className="text-2xl font-bold text-orange-500 mb-4 border-b border-white/10 pb-2">📖 English</h3>
                <ul className="list-disc pl-5 space-y-2 text-[15px]">
                  <li><strong>Grammar:</strong> Advanced clauses, tense sequences, editing/omissions, determiners</li>
                  <li><strong>Literature:</strong> Biographies, science fiction, comprehensive inference</li>
                  <li><strong>Writing:</strong> Formal letters, Report writing, Stories with outlines, Articles</li>
                </ul>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default SyllabusMilestones;