<template>
	
	
		
		 <div class="bg-white rounded-lg shadow w-full lg:w-6/12 lg:mx-auto">

    <!-- The card header -->

    <div class="flex px-3 mt-4 py-2 justify-between items-center">

      <div>
        <img src="/img/woman.jpg" class="w-8 h-8 rounded-full border-solid border-2 border-gray-600 object-cover object-center">

      </div>

        <div class="relative">
        <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 text-gray-800 hover:text-purple-600 "><path d="M19 9l-7 7-7-7"></path></svg>

       <!--  The dropdown section -->

       <div v-if=isOpen class="p-2 bg-white space-y-2 top-0 right-0 absolute">

        <div class="block"> Delete</div>
         

       </div>


       <!-- End of the drop down section -->
        
        </div>
      

    </div>

    <!-- End of the card header -->
      <!-- The card body  -->
    <div>
      
      <img src="/img/woman.jpg" class="w-full h-full object-cover object-center">

    </div>

      <!-- End of the card body -->

    <!-- The card footer  -->

    <div class="flex mt-2 py-4 px-2 justify-between items-center ">

      <!-- The first div -->
      
      <div>

          <ul class="flex items-center space-x-2">


          <li>   

            <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 text-gray-700  hover:text-red-500 "><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>  

          </li>
           <li>
               <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 text-gray-700 hover:text-purple-600 "><path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
            </li>
            <li>  
                 <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 text-gray-700 hover:text-purple-600 "><path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
            </li>
             <li> 

                 <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 text-gray-700 hover:text-purple-600 "><path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
              </li>
          

        </ul>
      
           
        </div>

        <!-- end of the first div -->



      <!-- The second div -->

      <div>

            <ul class="flex space-x-2 px-2 items-center">

          <li> <p class="font-body tracking-wider text-gray-700 text-xs font-medium"><span class="font-body tracking-wider text-gray-700 text-xs font-medium"> 12</span>&nbsp;Comments</p></li>
          <li> <p class="font-body tracking-wider text-gray-700 text-xs font-medium"><span class="font-body tracking-wider text-gray-700 text-xs font-medium"> 7.4K</span>&nbsp;Likes</p></li>


        </ul>

        

      </div>
  </div>

  <!--  End of the card footer -->
    


 
          <!--  End of the feeds section -->


	</div>


</template>

<script>
	
export default{


	data(){

		return {

      isOpen:false


		}
	},



}


</script>