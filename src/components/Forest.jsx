import PineTree from "./PineTree";
import OakTree from "./OakTree";
import DeadTree from "./DeadTree";
import FlowerBush from "./FlowerBush";
import Grass from "./Grass";

export default function Forest() {

  const trees = [];

  const MAP_RADIUS = 100;


  const LAKE = {
    x: 0,
    z: 20,
    radius: 35,
  };


  const HUT = {
    x: -35,
    z: -20,
    radius: 28,
  };



  // 🦋 Butterfly Start → 🌳 Meeting Tree
  const STORY_PATH = [
    [-80, -70],
    [-60, -45],
    [-45, -25],
  ];



  // 🏠 Hut → 🌊 Lake
  const HUT_LAKE_PATH = [
    [-35,-20],
    [-15,0],
    [0,20],
  ];



  // 🌳 Meeting Tree → 🏠 Hut
  const TREE_HUT_PATH = [
    [-45,-25],
    [-35,-20],
  ];





  function insideCircle(x,z,cx,cz,r){

    return (
      (x-cx)**2 +
      (z-cz)**2
    ) < r*r;

  }





  // Check any path
  function nearAnyPath(x,z,path,distanceLimit = 20){


    for(let i=0;i<path.length-1;i++){


      const x1 = path[i][0];
      const z1 = path[i][1];


      const x2 = path[i+1][0];
      const z2 = path[i+1][1];



      const dx = x2-x1;
      const dz = z2-z1;


      const length = dx*dx + dz*dz;



      let t =
      ((x-x1)*dx +
       (z-z1)*dz) / length;



      t = Math.max(0,Math.min(1,t));



      const closestX = x1 + dx*t;
      const closestZ = z1 + dz*t;



      const distance = Math.sqrt(
        (x-closestX)**2 +
        (z-closestZ)**2
      );



      if(distance < distanceLimit)
        return true;

    }


    return false;

  }







  // 🚫 No object spawn zones
  function isPathBlocked(x,z){

  // 🦋 Butterfly path (keep wider)
  if(
    nearAnyPath(
      x,
      z,
      STORY_PATH,
      20
    )
  )
    return true;


  // 🌳 Meeting tree → 🏠 Hut
  if(
    nearAnyPath(
      x,
      z,
      TREE_HUT_PATH,
      20
    )
  )
    return true;


  // 🏠 Hut → 🌊 Lake
  if(
    nearAnyPath(
      x,
      z,
      HUT_LAKE_PATH,
      20
    )
  )
    return true;


  return false;

}








  // 🌲 MAIN FOREST

  for(let i=0;i<2000;i++){



    const angle =
    Math.random()*Math.PI*2;



    const radius =
    Math.sqrt(Math.random()) *
    MAP_RADIUS;



    const x =
    Math.cos(angle)*radius;



    const z =
    Math.sin(angle)*radius;




    if(Math.sqrt(x*x+z*z)>MAP_RADIUS)
      continue;




    if(
      insideCircle(
        x,z,
        LAKE.x,
        LAKE.z,
        LAKE.radius
      )
    )
      continue;



    if(
      insideCircle(
        x,z,
        HUT.x,
        HUT.z,
        HUT.radius
      )
    )
      continue;
      

    if(isPathBlocked(x,z))
      continue;





    const random = Math.random();



    if(random < 0.6){


      trees.push(

        <PineTree

        key={"pine-"+i}

        position={[x,2,z]}

        rotation={[
          0,
          Math.random()*Math.PI*2,
          0
        ]}

        scale={
          1.15+
          Math.random()*0.08
        }

        />

      );


    }
    else if(random < 0.9){


      trees.push(

        <OakTree

        key={"oak-"+i}

        position={[x,7,z]}

        rotation={[
          0,
          Math.random()*Math.PI*2,
          0
        ]}

        scale={
          2.8+
          Math.random()*1.3
        }

        />

      );


    }
    else{


      trees.push(

        <DeadTree

        key={"dead-"+i}

        position={[x,2,z]}

        rotation={[
          0,
          Math.random()*Math.PI*2,
          0
        ]}

        scale={
          1.2+
          Math.random()*0.1
        }

        />

      );

    }

  }

  // 🌲 MAIN FOREST

for(let i=0;i<2000;i++){
  const manualPines = [
    [-50, 2, -60],
    [-60, 2, -55],
    [-46, 2, -30],
    [-34, 2, -45],

    // Add more here
    [-55, 2, -65],
    [-56, 2, -68],
    [-58, 2, -63],
    [-60, 2, -67],

    [-70, 2, -30],
    [-72, 2, -33],
    [-74, 2, -28],
    [-68, 2, -35],
  ];
  
}

// ✅ ADD YOUR MANUAL TREES HERE

const manualPines = [
  [-60, 2, -60],
  [-62, 2, -58],
  [-64, 2, -62],
  [-66, 2, -59],
  [-68, 2, -61],
  [-70, 2, -57],
  [-72, 2, -63],
  [-74, 2, -60],
  [-76, 2, -58],
  [-78, 2, -62],
  [-80, 2, -59],
  [-82, 2, -61],
  [-84, 2, -57],
  [-86, 2, -63],
  [-88, 2, -60],
  [-62, 2, -55],
  [-64, 2, -55],
  [-66, 2, -55],
  [-68, 2, -55],
  [-70, 2, -53],
  [-72, 2, -53],
  [-74, 2, -53],
  [-76, 2, -53],
  [-78, 2, -53],
  [-80, 2, -53],
  [-82, 2, -53],
  [-84, 2, -53],
  [-86, 2, -53],
  [-88, 2, -53],
  [-65, 2, -50],
  [-69, 2, -50],
  [-71, 2, -50],
  [-73, 2, -50],
  [-75, 2, -50],
  [-77, 2, -50],
  [-79, 2, -50],
  [-81, 2, -50],
  [-83, 2, -50],
  [-85, 2, -50],
  [-87, 2, -50],
  [-89, 2, -50],
  [-66, 2, -45],
  [-68, 2, -45],
  [-70, 2, -45],
  [-72, 2, -45],
  [-74, 2, -45],
  [-76, 2, -45],
  [-78, 2, -45],
  [-80, 2, -45],
  [-68, 2, -43],
  [-70, 2, -43],
  [-72, 2, -43],
  [-74, 2, -43],
  [-76, 2, -43],
  [-78, 2, -43],
  [-80, 2, -43],
  [-69, 2, -41],
  [-71, 2, -41],
  [-73, 2, -41],
  [-75, 2, -41],
  [-77, 2, -41],
  [-70, 2, -39],
  [-70, 2, -37],
  [-71, 2, -35],
  [-72, 2, -33],
  [-73, 2, -31],
];

manualPines.forEach((pos, i) => {
  trees.push(
    <PineTree
      key={"manual-pine-" + i}
      position={pos}
      rotation={[0, Math.random() * Math.PI * 2, 0]}
      scale={1.15}
    />
  );
});







  // 🌸 Flowers beside butterfly path

  const pathFlowers = [

    [-60,2,-60],
    [-80,2,-60],
    [-65,2,-60],
    [-75,2,-55],
    [-70,2,-50],
    [-55,2,-40],
    [-50,2,-30],

    [-60, 2, -63],
    [-62, 2, -63],
    [-64, 2, -63],
    [-66, 2, -63],
    [-68, 2, -61],
    [-70, 2, -63],
    [-72, 2, -63],
    [-74, 2, -60],
    [-76, 2, -63],
    [-78, 2, -62],
    [-80, 2, -63],
    [-82, 2, -61],
    [-84, 2, -57],
    [-86, 2, -63],
    [-88, 2, -60],

    [-75,2,-35],
    [-65,2,-25],

    [-35,2,-20],

  ];



  pathFlowers.forEach((pos,i)=>{


    trees.push(

      <FlowerBush

      key={"flower-"+i}

      position={pos}

      rotation={[
        0,
        Math.random()*Math.PI*2,
        0
      ]}

      scale={3}

      />

    );


  });

  // 🌾 Random grass and flowers

  const manualGrass = [
    [-60, 2, -70],
    [-60, 2, -72],
    [-62, 2, -74],
    [-60, 2, -76],
    [-60, 2, -78],
    [-60, 2, -70],
    [-60, 2, -71],
    [-61, 2, -70],
    [-62, 2, -70],
    [-63, 2, -70],
    [-64, 2, -70],
    [-62, 2, -73],
    [-62, 2, -74],
    [-62, 2, -75],
    [-62, 2, -76],
    [-62, 2, -77],
    [-62, 2, -78],
    [-62, 2, -79],
    [-70, 2, -70],
    [-69, 2, -75],
    [-68, 2, -70],
    [-67, 2, -70],
    [-66, 2, -75],
    [-70, 2, -71],
    [-70, 2, -72],
    [-69, 2, -75],
    [-68, 2, -70],
    [-67, 2, -75],
    [-66, 2, -70],
    [-70, 2, -75],
    [-70, 2, -69],
    [-69, 2, -69],
];

  manualGrass.forEach((pos, i) => {
    trees.push(
      <Grass
        key={"grass-" + i}
        position={pos}
        rotation={[0, Math.random() * Math.PI * 2, 0]}
        scale={7}
      />
    );
  });








  // 🌿 Fill empty lands with bushes

for(let i = 0; i < 500; i++){

  const angle = Math.random() * Math.PI * 2;

  const radius = Math.sqrt(Math.random()) * MAP_RADIUS;


  const x = Math.cos(angle) * radius;

  const z = Math.sin(angle) * radius;



  // Keep lake clear
  if(
    insideCircle(
      x,
      z,
      LAKE.x,
      LAKE.z,
      LAKE.radius
    )
  )
    continue;



  // Keep hut area clear
  if(
    insideCircle(
      x,
      z,
      HUT.x,
      HUT.z,
      HUT.radius
    )
  )
    continue;



  // Keep walking paths clear
  if(isPathBlocked(x,z))
    continue;



  trees.push(
    <FlowerBush
      key={"land-bush-" + i}
      position={[x, 2, z]}
      rotation={[0, Math.random() * Math.PI * 2, 0]}
      scale={5 + Math.random() * 0.9}
    />
  );

}





  return <>{trees}</>;

}