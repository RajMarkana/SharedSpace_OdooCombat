import React from 'react'

const Dashboard = () => {
  return (
    <>

      <section class="text-secondary body-font">
        <div class="container px-5 py-5 mx-auto">
          <div class="flex flex-wrap justify-between gap-5 -m-4 text-center">
            <div class="bg-slate-100 rounded-2xl p-10 sm:w-1/5 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-primary">2.7K</h2>
              <p class="leading-relaxed">Resource</p>
            </div>
            <div class="bg-slate-100 rounded-2xl  p-10 sm:w-1/5 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-primary">1.8K</h2>
              <p class="leading-relaxed">Clients</p>
            </div>
            <div class="bg-slate-100 rounded-2xl  p-10 sm:w-1/5 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-primary">35</h2>
              <p class="leading-relaxed">Downloads</p>
            </div>
            <div class="bg-slate-100 rounded-2xl  p-10 sm:w-1/5 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-primary">4</h2>
              <p class="leading-relaxed">Products</p>
            </div>
          </div>
        </div>
      </section>


      <div className='mt-10'>
        <h1 className='text-2xl font-semibold'>Recently Added Resource</h1>
      </div>

    </>
  )
}

export default Dashboard