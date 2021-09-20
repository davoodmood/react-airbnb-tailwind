// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function exploreNearbyCall(req, res) {
  res.status(200).json([
    {
      "img":"https://a0.muscache.com/im/pictures/18ab1ca2-a759-48de-a55b-1cb67c25c637.jpg?im_q=medq&im_w=240",
      "location":"London",
      "distance":"45-minute drive"
    },
    {
      "img":"https://a0.muscache.com/im/pictures/9ff017f4-1a62-4727-b83e-4087336f8c4a.jpg?im_q=medq&im_w=240",
      "location":"Manchester",
      "distance":"4.5-hour drive"
    },
    {
      "img":"https://a0.muscache.com/im/pictures/82293cc1-ba0b-4167-85a6-ed133d478c20.jpg?im_q=medq&im_w=240",
      "location":"Liverpool",
      "distance":"4.5-hour drive"
    },
    {
      "img":"https://a0.muscache.com/im/pictures/da75656c-f2d5-4878-aade-f2971842365f.jpg?im_q=medq&im_w=240",
      "location":"York",
      "distance":"4-hour drive"
    },
    {
      "img":"https://a0.muscache.com/im/pictures/42901911-940b-45ac-997e-961ebf472195.jpg?im_q=medq&im_w=240",
      "location":"Cardiff",
      "distance":"45-minute drive"
    },
    {
      "img":"https://a0.muscache.com/im/pictures/73ab906b-eea1-425d-9fea-bf2c79d86556.jpg?im_q=medq&im_w=240",
      "location":"Birkenhead",
      "distance":"4.5-hour drive"
    },
    {
      "img":"https://a0.muscache.com/im/pictures/e8d3d6de-40b1-4341-89f2-afb2a1a4f71f.jpg?im_q=medq&im_w=240",
      "location":"Newquay",
      "distance":"6-hour drive"
    },
    {
      "img":"https://a0.muscache.com/im/pictures/3849e3f1-d275-43fb-8957-4c90f26e14db.jpg?im_q=medq&im_w=240",
      "location":"Hove",
      "distance":"2-hour drive"
    }
  ])
}
