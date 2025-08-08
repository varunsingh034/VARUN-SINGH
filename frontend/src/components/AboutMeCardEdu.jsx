import React from 'react'

const AboutMeCardEdu = (props) => {
  return (
    <>
        <div class="relative w-full p-6 bg-white/35 dark:bg-gray-900/30 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 group media-object">

            <div class="relative">
                <h3 class="text-2xl font-semibold mb-4 text-purple-600">{props.title}</h3>
                <p class="text-lg text-gray-700 dark:text-gray-300">{props.institute}<br/>
                    <span class="text-gray-600 dark:text-gray-400">

                        {props.branch}
                        <br/>
                        CGPA:{props.cgpa}

                    </span>
                </p>
            </div>

        </div>
    </>
  )
}

export default AboutMeCardEdu