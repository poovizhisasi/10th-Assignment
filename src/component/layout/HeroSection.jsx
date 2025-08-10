import React from "react"

function HeroSection(){
return(
<section className="max-h-screen ">  
{/* nav bar*/}
<nav className="flex justify-between p-10 items-center bg-[#fafaf7] max-w-xxl ">
<div>{/* logo*/}
  
<h1 className="text-2xl font-semibold ">Co-coConut</h1>
</div>

<ul className="flex space-x-4 gap-4 " >{/* menulist*/}
<li ><a class="nav-link active" aria-current="page" href="#">Home</a>
</li><li class="nav-item"><a class="nav-link" href="#">About</a>
</li><li class="nav-item"><a class="nav-link" href="#">Product</a>
</li><li class="nav-item"><a class="nav-link" href="#">Features</a>
</li><li class="nav-item"><a class="nav-link" href="#">Contactus</a></li></ul>
<buttom className="bg-[#ad343a] text-white px-5 py-3 text-lg rounded-full">LOGIN</buttom>
</nav>
{/* herosection */}
<div className="flex justify-left  py-5 bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL9g7oPJoVguLCzzS8cwi8naJ_ZahEP8d6vQ&s)] bg-cover  ">
  <div className="container max-w-md ">
    <p className="text-lg my-8 px-10 font-large text-gray-900  ">
coconut,  பனை குடும்பத்தைச் சேர்ந்த (அரேகேசியே) ஒரு மரமான தேங்காய் பனையின் (கோகோஸ் நியூசிஃபெரா) உண்ணக்கூடிய பழம். தேங்காய்கள் இந்தோ-மலாயாவில் எங்காவது தோன்றியிருக்கலாம் மற்றும் வெப்பமண்டலத்தின் மிக முக்கியமான பயிர்களில் ஒன்றாகும். தேங்காய் சதை அதிக கொழுப்பில் உள்ளது மற்றும் உலர்த்தலாம் அல்லது புதியதாக சாப்பிடலாம் அல்லது தேங்காய் பால் அல்லது தேங்காய் எண்ணெயில் பதப்படுத்தலாம். தேங்காய் நீர் என்று அழைக்கப்படும் கொட்டையின் திரவம் பானங்களில் பயன்படுத்தப்படுகிறது.</p> 
 </div><div className="p-50 "> <p className="font-l text-voilet-600 font-semibold">🍹 Coconut in hand, summer on my mind. so buy a co-conut enjoy a days.....</p><br></br><buttom className="px-10 mt-2 bg-[#1d133a] text-white px-5 py-3 text-lg rounded-full">Join our world & buy a natural source </buttom></div>
</div>
</section>
)
}
export default HeroSection;