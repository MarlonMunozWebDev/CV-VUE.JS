const app = new Vue({
  el: '#app',
  template: '#contenido-nuevo',
  data: {
    informacion: [
      { experiencia: "Desarrollador Web", empresa: 'ARAMICH', tiempo: "1 año" },
      { skill1: "CSS3", skill2: 'HTML5', skill3: "JAVASCRIPT", skill4: 'JQUERY', skill5: "PHP&MYSQL", skill6 : "VUE.JS" },
      { escuela: "TESH", carrera: "Ingenieria Sistemas Computacionales",especialidad: 'Desarrollador Web' },
      { nativo: "Español", lenguaje: "Ingles - Intermedio"}
    ],
    mostrar: true,
    usuario: 'Marlon Ivan Muñoz Urbina',
    profesion: 'Ing. Sistemas Computacionales',
    correo: 'marlonmunoz.webdeveloper@outlook.com',
    telefono: '56 11 87 90 02',
    direccion: 'Ciudad de Mexico',
    imagen: "usuario.png"
  },

  methods: {
    toggleMostrar: function() {
      this.mostrar = !this.mostrar
    }
  }
})
