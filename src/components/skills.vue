<template>
    <cabecera />
    <section id="cuerpo">
    <div class="skills text-center max-w-screen-sm mx-auto">
    <h2 class="font-bold text-3xl mb-6 mt-6 font-oswald">Front-end</h2>
    <div class="skill flex items-center mb-4">
      <div class="skill-name flex-1 text-lg">HTML</div>
      <div class="skill-bar html rounded-2xl h-5 ml-4 relative w-4/5 bg-gray-300 py-4">
        <div class="skill-progress">90%</div>
      </div>
    </div>
    <div class="skill flex items-center mb-4">
      <div class="skill-name flex-1 text-lg">CSS</div>
      <div class="skill-bar css rounded-2xl h-5 ml-4 relative w-4/5 bg-gray-300 py-4">
        <div class="skill-progress">80%</div>
      </div>
    </div>
     <div class="skill flex items-center mb-4">
      <div class="skill-name flex-1 text-lg">TailWind</div>
      <div class="skill-bar tail rounded-2xl h-5 ml-4 relative w-4/5 bg-gray-300 py-4">
        <div class="skill-progress">45%</div>
      </div>
    </div>
     <div class="skill flex items-center mb-4">
      <div class="skill-name flex-1 text-lg">JavaScript</div>
      <div class="skill-bar js rounded-2xl h-5 ml-4 relative w-4/5 bg-gray-300 py-4">
        <div class="skill-progress">73%</div>
      </div>
    </div>
    <hr class="mb-4"/>
     <div class="skill flex items-center mb-4">
      <div class="skill-name flex-1 text-lg">Vue</div>
      <div class="skill-bar vue rounded-2xl h-5 ml-4 relative w-4/5 bg-gray-300 py-4">
        <div class="skill-progress">75%</div>
      </div>
    </div>

    <div class="skill flex items-center mb-4">
      <div class="skill-name flex-1 text-lg">Angular</div>
      <div class="skill-bar angular rounded-2xl h-5 ml-4 relative w-4/5 bg-gray-300 py-4">
        <div class="skill-progress">60%</div>
      </div>
    </div>

    <div class="skill flex items-center mb-4">
      <div class="skill-name flex-1 text-lg">React</div>
      <div class="skill-bar react rounded-2xl h-5 ml-4 relative w-4/5 bg-gray-300 py-4">
        <div class="skill-progress">55%</div>
      </div>
    </div>
    
    <h2 class="font-bold text-3xl mb-6 mt-6 font-oswald">Back-end</h2>
     <div class="skill flex items-center mb-4">
      <div class="skill-name flex-1 text-lg">PHP</div>
      <div class="skill-bar php rounded-2xl h-5 ml-4 relative w-4/5 bg-gray-300 py-4">
        <div class="skill-progress">60%</div>
      </div>
    </div>

    <hr class="mb-4"/>
    <div class="skill flex items-center mb-4">
      <div class="skill-name flex-1 text-lg">Laravel</div>
      <div class="skill-bar laravel rounded-2xl h-5 ml-4 relative w-4/5 bg-gray-300 py-4">
        <div class="skill-progress">72%</div>
      </div>
    </div>
     <div class="skill flex items-center mb-4">
      <div class="skill-name flex-1 text-lg">Symfony</div>
      <div class="skill-bar symfony rounded-2xl h-5 ml-4 relative w-4/5 bg-gray-300 py-4">
        <div class="skill-progress">53%</div>
      </div>
    </div>
    
    <h2 class="font-bold text-3xl mb-6 mt-6 font-oswald">DataBases</h2>
     <div class="skill flex items-center mb-4">
      <div class="skill-name flex-1 text-lg">MySql</div>
      <div class="skill-bar MySql rounded-2xl h-5 ml-4 relative w-4/5 bg-gray-300 py-4">
        <div class="skill-progress">70%</div>
      </div>
    </div>
     <div class="skill flex items-center mb-4">
      <div class="skill-name flex-1 text-lg">PL/Sql</div>
      <div class="skill-bar pl rounded-2xl h-5 ml-4 relative w-4/5 bg-gray-300 py-4">
        <div class="skill-progress">43%</div>
      </div>
    </div>
  </div>
  </section>
    <pie />
  </template>
  
  <script>
  import cabecera from './cabecera.vue';
  import pie from './pie.vue';
  export default {
    name: 'Skills',
    components: {
      cabecera,
      pie
    },
  };
  </script>
  
  <style>

#cuerpo {
  position: relative;
  min-height: 82.5vh;
}


  .skill-progress {
    border-radius: 20px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    color: white;
  }
  
  .html .skill-progress {
    background-color: #475569;
    animation: fill-barHTML 2s ease-in-out forwards;
  }

    
  @keyframes fill-barHTML {
    0% {
      width: 0;
    }
    100% {
      width: 90%;
    }
  }
  
  .css .skill-progress {
    background-color: #4b5563;
    animation: fill-barCSS 2s ease-in-out forwards;
  }

  @keyframes fill-barCSS {
        0% {
        width: 0;
        }
        100% {
        width: 80%;
        }
    }

.tail .skill-progress {
    background-color: #52525b;
    animation: fill-barTail 2s ease-in-out forwards;
  }

    
  @keyframes fill-barTail {
    0% {
      width: 0;
    }
    100% {
      width: 45%;
    }
  }
  
  .js .skill-progress {
    background-color: #525252;
    animation: fill-barJS 2s ease-in-out forwards;
  }
  
  @keyframes fill-barJS {
        0% {
        width: 0;
        }
        100% {
        width: 73%;
        }
  }

  .vue .skill-progress {
    background-color: #334155;
    animation: fill-barVUE 2s ease-in-out forwards;
  }

    
  @keyframes fill-barVUE {
    0% {
      width: 0;
    }
    100% {
      width: 75%;
    }
  }

  .angular .skill-progress {
    background-color: #1e293b;
    animation: fill-barAngular 2s ease-in-out forwards;
  }

    
  @keyframes fill-barAngular {
    0% {
      width: 0;
    }
    100% {
      width: 60%;
    }
  }

  .react .skill-progress {
    background-color: #0f172a;
    animation: fill-barREACT 2s ease-in-out forwards;
  }

    
  @keyframes fill-barREACT {
    0% {
      width: 0;
    }
    100% {
      width: 55%;
    }
  }
  
  .php .skill-progress {
    background-color: #374151;
    animation: fill-barPHP 2s ease-in-out forwards;
  }

    @keyframes fill-barPHP {
        0% {
        width: 0;
        }
        100% {
        width: 60%;
        }
    }

    .laravel .skill-progress {
    background-color: #1f2937;
    animation: fill-barlaravel 2s ease-in-out forwards;
  }

    
  @keyframes fill-barlaravel {
    0% {
      width: 0;
    }
    100% {
      width: 72%;
    }
  }

  .symfony .skill-progress {
    background-color: #111827;
    animation: fill-barsf 2s ease-in-out forwards;
  }

    
  @keyframes fill-barsf {
    0% {
      width: 0;
    }
    100% {
      width: 53%;
    }
  }

  .MySql .skill-progress {
    background-color: #44403c;
    animation: fill-barmy 2s ease-in-out forwards;
  }

    
  @keyframes fill-barmy {
    0% {
      width: 0;
    }
    100% {
      width: 70%;
    }
  }

  .pl .skill-progress {
    background-color: #292524;
    animation: fill-barpl 2s ease-in-out forwards;
  }

    
  @keyframes fill-barpl {
    0% {
      width: 0;
    }
    100% {
      width: 43%;
    }
  }

  </style>