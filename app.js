particlesJS(
    {
        "particles": {
          "number": {
            "value": 96,
            "density": {
              "enable": true,
              "value_area": 721.5354273894853
            }
          },
          "color": {
            "value": "#a7d129"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#050404"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.7856719098241062,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 4,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 0,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 80.17060304327615,
              "rotateY": 80.17060304327615
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      }
);


//******************************************************************************
// *                           Maquinas de escribir
// *****************************************************************************
const maquinaAbout = document.getElementById('maquina-about');
const maquinaWork = document.getElementById('maquina-work');
const maquinaAcreditation = document.getElementById('maquina-acreditation');
const maquinaSkills = document.getElementById('maquina-skills');
const maquinaProjects = document.getElementById('maquina-project');
const maquinaContact = document.getElementById('maquina-contact');

const maquinaEscribir3 = (text = '', tiempo = 200, etiqueta = '')=>{
  //! Crea un arreblo con todos los caracteres que le paso
  let arrayCaracteres = text.split('');
  etiqueta.innerHTML = '';
  let i = 0;
  let j = text.length;
  let escribir = setInterval(function(){
      if(i === arrayCaracteres.length){
          //*retroceder
          etiqueta.innerHTML = text.substring(0,j);
          j--;
          if(j === 0){
              i = 0;
              etiqueta.innerHTML = '';
              j = text.length;
          }
      }else{
          etiqueta.innerHTML += arrayCaracteres[i];
          i++;
      }
  }, tiempo)
}

maquinaEscribir3("AboutMe  ", 200, maquinaAbout);
maquinaEscribir3("Work  ", 200, maquinaWork);
maquinaEscribir3("Acreditations  ", 200, maquinaAcreditation);
maquinaEscribir3("Skills  ", 200, maquinaSkills);
maquinaEscribir3("Projects ", 200, maquinaProjects);
maquinaEscribir3("ContactMe  ", 200, maquinaContact);

//******************************************************************************
// *                           Copiar al portapapeles
// *****************************************************************************
function copiarAlPortapapeles(id_elemento) {
  // Crea un campo de texto "oculto"
  var aux = document.createElement("input");
  // Asigna el contenido del elemento especificado al valor del campo
  aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
  // Añade el campo a la página
  document.body.appendChild(aux);
  // Selecciona el contenido del campo
  aux.select();
  // Copia el texto seleccionado
  document.execCommand("copy");
  // Elimina el campo de la página
  document.body.removeChild(aux);
}


//******************************************************************************
// *                                  Alertas!
// *****************************************************************************
function copy_alert(name_alert){
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: `${name_alert} has been copied.`,
    showConfirmButton: false,
    timer: 1500
  });
}

//******************************************************************************
// *                                  Login
// *****************************************************************************
//! *** Abrir Login ***

function openLogin(){
  document.getElementById("login").style.display="block";
}

function closeLogin(){
  document.getElementById("login").style.display="none";
}
