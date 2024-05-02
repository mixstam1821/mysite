

/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "An Assessment of Global Dimming and Brightening during 1984–2018 Using the FORTH Radiative Transfer Model and ISCCP Satellite and MERRA-2 Reanalysis Data",
    authors:
      "Stamatis, M.; Hatzianastassiou, N.; Korras-Carraca, M.-B.; Matsoukas, C.; Wild, M.; Vardavas, I.",
    conferences:
      "",
    researchYr: 2023,
    citebox: "popup1", 
    image: "assets/images/research-page/p2.png",
   citation: {
      vancouver:
        "Stamatis, M.; Hatzianastassiou, N.; Korras-Carraca, M.-B.; Matsoukas, C.; Wild, M.; Vardavas, I. An Assessment of Global Dimming and Brightening during 1984–2018 Using the FORTH Radiative Transfer Model and ISCCP Satellite and MERRA-2 Reanalysis Data. Atmosphere 2023, 14, 1258. https://doi.org/10.3390/atmos14081258",
    },
    abstract:
      "In this study, an assessment of the FORTH radiative transfer model (RTM) surface solar radiation (SSR) as well as its interdecadal changes (Δ(SSR)), namely global dimming and brightening (GDB), is performed during the 35-year period of 1984–2018. Furthermore, a thorough evaluation of SSR and (Δ(SSR)) is conducted against high-quality reference surface measurements from 1193 Global Energy Balance Archive (GEBA) and 66 Baseline Surface Radiation Network (BSRN) stations. For the first time, the FORTH-RTM Δ(SSR) was evaluated over an extended period of 35 years and with a spatial resolution of 0.5° × 0.625°. The RTM uses state-of-the-art input products such as MERRA-2 and ISCCP-H and computes 35-year-long monthly SSR and GDB, which are compared to a comprehensive dataset of reference measurements from GEBA and BSRN. Overall, the FORTH-RTM deseasonalized SSR anomalies correlate satisfactorily with either GEBA (R equal to 0.72) or BSRN (R equal to 0.80). The percentage of agreement between the sign of computed GEBA and FORTH-RTM Δ(SSR) is equal to 63.5% and the corresponding percentage for FORTH-RTM and BSRN is 54.5%. The obtained results indicate that a considerable and statistically significant increase in SSR (Brightening) took place over Europe, Mexico, Brazil, Argentina, Central and NW African areas, and some parts of the tropical oceans from the early 1980s to the late 2010s. On the other hand, during the same 35-year period, a strong and statistically significant decrease in SSR (Dimming) occurred over the western Tropical Pacific, India, Australia, Southern East China, Northern South America, and some parts of oceans. A statistically significant dimming at the 95% confidence level, equal to −0.063 Wm−2 year−1 (or −2.22 Wm−2) from 1984 to 2018 is found over the entire globe, which was more prevalent over oceanic than over continental regions (−0.07 Wm−2 year−1 and −0.03 Wm−2 year−1, statistically significant dimming at the 95% confidence level, respectively) in both hemispheres. Yet, this overall 35-year dimming arose from alternating decadal-scale changes, consisting of dimming during 1984–1989, brightening in the 1990s, turning into dimming over 2000–2009, and brightening during 2010–2018.",
    absbox: "absPopup1",
  },

  {
    title: "Interdecadal Changes of the MERRA-2 Incoming Surface Solar Radiation (SSR) and Evaluation against GEBA & BSRN Stations",
    authors:
      "Stamatis, M.; Hatzianastassiou, N.; Korras-Carraca, M.B.; Matsoukas, C.; Wild, M.; Vardavas, I.",
    conferences:
      "",
    researchYr: 2022,
    citebox: "popup2",
    image: "assets/images/research-page/p1.png",
   citation: {
      vancouver:
        "Stamatis, M.; Hatzianastassiou, N.; Korras-Carraca, M.B.; Matsoukas, C.; Wild, M.; Vardavas, I. Interdecadal Changes of the MERRA-2 Incoming Surface Solar Radiation (SSR) and Evaluation against GEBA & BSRN Stations. Appl. Sci. 2022, 12, 10176. https://doi.org/10.3390/app121910176",
    },
    abstract:
      "This study assesses and evaluates the 40-year (1980–2019) Modern-Era Retrospective Analysis for Research and Applications v.2 (MERRA-2) surface solar radiation (SSR) as well as its interdecadal changes (Δ(SSR)) against high quality reference surface measurements from 1397 Global Energy Balance Archive (GEBA) and 73 Baseline Surface Radiation Network (BSRN) stations. The study is innovative since MERRA-2 (Δ(SSR)) has never been evaluated in the past, while the MERRA-2 SSR fluxes themselves have not been evaluated in such large spatial scale, which is global here, and temporal basis, which counts 40-years. Other novelties of the study are the use of the highest quality BSRN stations, done for the first time in such an evaluation, as well as the use of a greater number of reference-GEBA stations than in other studies. Moreover, the assessment and evaluation in this study are largely based on SSR anomalies, while being done in depth, at spatial scales ranging from the local to global/hemispherical, and separately for land and ocean areas, and at temporal scales spanning intervals from decadal sub-periods to 40 years. Overall, the MERRA-2 deseasonalized SSR anomalies correlate well with either GEBA (R equal to 0.61) and BSRN (R equal to 0.62). The percentage of agreement between the sign of computed GEBA and MERRA-2 Δ(SSR) is equal to 63.4% and the corresponding percentage for MERRA-2 and BSRN is 50%. According to MERRA-2, strong and statistically significant positive Δ(SSR) (Brightening) is found over Europe, Central Africa, Mongolia, Mexico, Brazil, Argentina and some parts of the tropical oceans. In contrast, large and statistically significant negative Δ(SSR) (Dimming) occurs over the western Tropical Warm Pool, India, Southern East China, Amazonia, stratocumulus covered areas and some parts of oceans. MERRA-2 yields a dimming equal to −0.158 ± 0.005 W/m2/year over the globe from 1980 to 2019. This 40-year dimming, which occurred in both hemispheres, more over ocean than continental areas (−0.195 ± 0.006 and −0.064 ± 0.006 W/m2/year, respectively), underwent decadal scale variations.",
    absbox: "absPopup2",
  },
  
    {
    title: "The Global and Diffuse Solar Radiation Trends Using GEBA & BSRN Ground Based Measurements during 1984–2018",
    authors:
      "Stamatis, M.; Ioannou, P.; Korras-Carraca, M.B.; Hatzianastassiou, N.",
    conferences:
      "",
    researchYr: 2023,
    citebox: "popup3",
    image: "assets/images/project-page/dif.jpeg",
   citation: {
      vancouver:
        "Stamatis, M.; Ioannou, P.; Korras-Carraca, M.B.; Hatzianastassiou, N. The Global and Diffuse Solar Radiation Trends Using GEBA & BSRN Ground Based Measurements during 1984–2018. Environ. Sci. Proc. 2023, 26, 141. https://doi.org/10.3390/environsciproc2023026141",
    },
    abstract:
"Surface solar radiation (SSR) is a crucial parameter for both the Earth’s climate and human activities, and it consists of two components: the direct beam from the sun and diffuse radiation, with the latter being scattered by atmospheric molecules, aerosols, or clouds. The multidecadal variations of SSR, known as Global Dimming and Brightening (GDB), should also arise from a corresponding variability of either the direct or the diffuse radiation. Thus, the determination of the trends of both the direct and the diffuse radiation is important for showing the causes of GDB. In the present study, we estimate the trends of global and diffuse radiation on a global scale during the period 1984–2018, using worldwide reference ground-based measurements from the Global Energy Balance Archive (GEBA) and the Baseline Surface Radiation Network (BSRN). An increasing tendency of SSR is observed over most locations on our planet, while a decreasing trend occurs in India. On the other hand, the diffuse radiation has decreased over Europe and parts of Asia, whereas it has increased over the USA, India, and East Asia.",
      absbox: "absPopup3",
  },

    {
    title: "On the Contribution of Aerosols and Clouds to Global Dimming and Brightening Using a Radiative Transfer Model, ISCCP-H Cloud and MERRA-2 Aerosol Optical Properties",
    authors:
      "Stamatis, M.; Hatzianastassiou, N.; Korras-Carraca, M.B.; Matsoukas, C.; Wild, M.; Vardavas, I.",
    conferences:
      "",
    researchYr: 2023,
    citebox: "popup4",
    image: "assets/images/project-page/contri.jpeg",
   citation: {
      Vancouver:
"Stamatis, M.; Hatzianastassiou, N.; Korras-Carraca, M.-B.; Matsoukas, C.; Wild, M.; Vardavas, I. On the Contribution of Aerosols and Clouds to Global Dimming and Brightening Using a Radiative Transfer Model, ISCCP-H Cloud and MERRA-2 Aerosol Optical Properties. Environ. Sci. Proc. 2023, 26, 34. https://doi.org/10.3390/environsciproc2023026034",    },
    abstract:
"The interdecadal changes of the incident solar radiation at the Earth’s surface (SSR) are mainly driven by changes in clouds and aerosols. In order to investigate their contribution to the SSR changes (global dimming and brightening or GDB), the FORTH radiative transfer model (RTM) is used to compute the SSR fluxes. The cloud input data were taken from satellite observations of ISCCP-H, while aerosols and meteorological data were taken from the MERRA-2 reanalysis dataset. The RTM operates on a monthly basis and in 0.5° × 0.625° latitude-longitude spatial resolution. The GDB was also computed keeping constant at their initial 1984 values, each input parameter that was examined, resulting in a GDB with the ‘frozen’ parameter. The contribution of each parameter to the GDB is defined as the subtraction of the frozen GDB from the base-run GDB, and the positive/negative values of the contribution indicate that the interdecadal variability of the examined parameter increased/decreased the SSR. The aerosol optical depth (AOD) produced a dimming in India, Amazonia, and S. China, whereas it induced a brightening in Europe and Mexico. On the other hand, the total cloud cover (TCC) changes caused a dimming over the Arctic, Australia, and the South Ocean against a brightening in Europe, Mexico, the Middle East, and South America. The global mean contribution of changing AOD is 0.37 W/m2, and for TCC, it is 4.7 W/m2, indicating that globally, the counteraction of cloud cover to the overall global dimming is larger. Opposite contributions to GDB from AOD and TCC may occur over specific regions, highlighting the complexity of the causes of the GDB phenomenon.",
      absbox: "absPopup4",
  },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
