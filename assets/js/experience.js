AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Teaching Assistant - Programming Courses",
    cardImage: "assets/images/experience-page/meteo-lab.png",
    place: "Laboratory of Meteorology and Climatology, University of Ioannina, Ioannina",
    time: "(Mar, 2022 - present)",
    desp: "<li>Teaching basic programming concepts.</li><li>Teaching basic data analysis tools in Python.</li><li>Increased master's students' programming and data analysis skills, achieving 50% average improvement.</li>",
  },
  {
    title: "IT services",
    cardImage: "assets/images/experience-page/dioni.jpeg",
    place: "Ioannina",
    time: "(Sep, 2022 - Sep, 2023)",
    desp: "<li>Dioni: Computing Infrastructure for Big-Data Processing and Analysis.</li><li>Led high-performance computations for processing and analyzing up to 20 TB of data.</li><li>Oversaw meteorological software installation and execution for optimal performance.</li>",
  },
  {
    title: "Environmental Research Services",
    cardImage: "assets/images/experience-page/epirusreg.jpeg",
    place: "Ioannina",
    time: "(May, 2021 - Jul, 2021)",
    desp: "<li>Registration of meteorological monitoring infrastructure in the Region of Epirus, IR2MA</li>",
  },
    {
    title: "Teaching Assistant: Vector Analysis",
    cardImage: "assets/images/experience-page/phys.jpeg",
    place: "Physics Department, University of Ioannina, Ioannina",
    time: "(Mar, 2021 - Sep, 2021)",
    desp: "<li>Vector Analysis tutorial exercises- Spring Semester 2021 - Department of Physics</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);
