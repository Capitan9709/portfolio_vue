<template>
    <cabecera/>
    
    <div>
        <h2 class="text-4xl font-bold mt-8 text-center font-oswald">Testimonies</h2>
        <div class="bg-gray-100 py-8 flex flex-row flex-wrap mt-14">
            <div class="max-w-2xl mx-auto bg-slate-800 text-white rounded-lg shadow-md p-6 mb-4">
                <img class="w-24 h-24 rounded-full object-cover mb-4 mx-auto" src="../../public/perfil1.jpg" alt="perfil">
                <p class="text-lg text-center mb-4">
                    "I had the pleasure of working with Luis on several 
                    occasions when my computer needed repairs. He is an 
                    outstanding technician who quickly diagnosed the 
                    problem and fixed it efficiently. He is professional, 
                    courteous, and always willing to answer any questions 
                    I had. I highly recommend him for any computer repair 
                    needs."
                </p>
                <p class="font-semibold text-center text-xl">Jesus</p>
            </div>
            
            <div class="max-w-2xl mx-auto bg-slate-800 text-white rounded-lg shadow-md p-6 mb-4">
                <img class="w-24 h-24 rounded-full object-cover mb-4 mx-auto" src="../../public/perfil2.jpg" alt="perfil">
                <p class="text-lg text-center mb-4">
                    "I had the pleasure of working with Luis on a web 
                    development project and was impressed by his attention 
                    to detail and ability to problem-solve. His technical 
                    expertise in microinformatics and networks was 
                    invaluable, and he was always willing to go above and 
                    beyond to ensure the project's success."
                </p>
                <p class="font-semibold text-center text-xl">Rose</p>
            </div>

            <div class="max-w-2xl mx-auto bg-slate-800 text-white rounded-lg shadow-md p-6 mb-4">
                <img class="w-24 h-24 rounded-full object-cover mb-4 mx-auto" src="../../public/perfil4.png" alt="perfil">
                <p class="text-lg text-center mb-4">
                    "I had the pleasure of working with Luis on 
                    several projects, and his technical skills in 
                    microinformatics and networks were instrumental 
                    to their success. He is detail-oriented, thorough, 
                    and always willing to go the extra mile to ensure 
                    that the project is completed on time and to a high 
                    standard. I highly recommend him for any IT project 
                    that requires a skilled and dedicated technician."
                </p>
                <p class="font-semibold text-center text-xl">Sara</p>
            </div>

            <div class="max-w-2xl mx-auto bg-slate-800 text-white rounded-lg shadow-md p-6 mb-4">
                <img class="w-24 h-24 rounded-full object-cover mb-4 mx-auto" src="../../public/perfil3.png" alt="perfil">
                <p class="text-lg text-center mb-4">
                    "Luis is an exceptional web developer who is highly 
                    skilled in microinformatics and networks. He is 
                    passionate about his work and always goes the extra 
                    mile to ensure that the project is successful. 
                    His technical expertise and attention to detail are 
                    second to none, and I would recommend him to anyone 
                    looking for a top-notch web developer."
                </p>
                <p class="font-semibold text-center text-xl">Frank</p>
            </div>
        </div>
    </div>
    <pie/>

</template>

<script>
import cabecera from './cabecera.vue'
import pie from './pie.vue'

export default {
    components: {
        cabecera,
        pie,
    }
}
</script>