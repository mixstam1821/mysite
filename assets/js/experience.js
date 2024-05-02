AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Teaching Assistant - Programming Courses",
    cardImage: "assets/images/experience-page/meteo-lab.png",
    place: "Ioannina",
    time: "(Mar, 2022 - present)",
    desp: "<li>Increased master's students' programming and data analysis skills, achieving 50% average improvement.</li>",
  },
  {
    title: "IT services",
    cardImage: "assets/images/experience-page/dioni.jpeg",
    place: "Ioannina",
    time: "(Sep, 2022 - Sep, 2023)",
    desp: "<li>Dioni: Computing Infrastructure for Big-Data Processing and Analysis.</li><li>Led high-performance computations for processing and analyzing up to 20 TB of data.</li><li>Oversaw meteorological software installation and execution for optimal performance.</li>",
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
