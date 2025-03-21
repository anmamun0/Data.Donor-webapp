// header control

const footerControl = () => {
     
    const footer = document.querySelector('footer');
 
        footer.innerHTML =
            ` 
              <div class="text-md bottom-0 left-0 right-0 text-center   justify-center items-center -mb-4 mt-36" id="invalidFooter"> 
                  <div class="container mx-auto text-xl flex flex-col md:flex-row items-center justify-between px-10 space-y-4 md:space-y-0">

    <!-- Phone Info -->
    <div class="flex items-center space-x-3">
      <i class="fas fa-phone-alt text-red-600"></i>
      <span class="text-red-600">0162552</span>
    </div>

    <!-- Email Info -->
    <div class="flex items-center space-x-3">
      <i class="fas fa-envelope text-red-600"></i>
      <a href="mailto:anmamun0@gmail.com" class="text-red-600 hover:text-red-700 transition">
        data.doner@gmail.com
      </a>
    </div>

    <!-- Donation Button -->
    <a href="./event_blood.html" class="bg-red-600 text-white font-bold px-6 py-2 rounded-lg shadow-md hover:bg-red-700 transition">
      Donate
    </a>
  </div>

  <!-- Horizontal Line -->
  <hr class="border-gray-700 opacity-30 my-6">

            <div class="container mx-auto lg:px-10 py-8 text-gray-700  flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            
                <!-- Logo and Social Media -->
                <div class="flex flex-col  items-center lg:items-start   text-center lg:text-left space-y-4">
                
                  <div class="flex  ">
                    <div class="text-red-500  ">
                      
                    </div>
                    <h2 class="text-xl font-bold text-red-600">Data.Doner</h2>
                  </div>
                  <p class="text-lg max-w-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor
                    incidi.</p>
                    <div class="flex space-x-4">
                        <!-- Facebook -->
                        <a href="https://www.facebook.com/anmamun0" target="_blank" class="text-gray-500 hover:text-red-500">
                          <i class="fab fa-facebook"></i>
                        </a>
                        <!-- LinkedIn -->
                        <a href="https://www.linkedin.com/in/anmamun0" target="_blank" class="text-gray-500 hover:text-red-500">
                          <i class="fab fa-linkedin"></i>
                        </a>
                      </div>
                      
                </div>
              
                <!-- Quick Links -->
                <div class="flex flex-col items-center text-left space-y-4">
                  <h3 class="text-lg font-bold border-b-[1px] border-gray-600 px-6">Supports</h3>
                  <ul class="space-y-2 text-md">
                    <li><a href="/feedback/about_us.html" class="hover:text-red-500">About Us</a></li>
                    <li><a href="/feedback/FAQ.html" class="hover:text-red-500">FAQ</a></li>
                    <li><a href="/feedback/term_conditions.html" class="hover:text-red-500">Term & Condition</a></li>
                  </ul>
                </div>
              
                <!-- Useful Links -->
                <div class="flex flex-col items-center  space-y-4">
                  <h3 class="text-lg font-bold border-b-[1px] border-gray-600 px-6">Contact</h3>
                  <ul class="space-y-2 text-md">
                    <li class="flex    space-x-2">
                      <span class="text-red-500">
                        <i class="fas fa-map-marker-alt"></i>
                      </span>
                      <span>Sylhet, Bangladesh</span>
                    </li>
                    <li class="flex  space-x-2">
                      <span class="text-red-500">
                        <i class="fas fa-globe"></i>
                      </span>
                      
                      <a href="https://anmamun0.vercel.app/" target="_blank">
                      <span >anmamun0.vercel.app</span>
                    </a>
                    </li>
                    <li class="flex   space-x-2">
                      <span class="text-red-500">
                        <i class="fas fa-envelope"></i>
                      </span>
                      <span>anmamun0@gmail.com</span>
                    </li>
                  </ul>
                </div>
              </div> 
              <div class="container mx-auto px-8 py-4  text-gray-700 border-t-2">
                    <!-- Footer Bottom -->
                    <div class=" pt-2 ">
                        <div class="container mx-auto text-center text-sm text-gray-500  lg:pl-36">
                            Copyright © 2021. All rights reserved.
                        </div>
                    </div>
                <div>

        </div>
            `;
             

}
footerControl()