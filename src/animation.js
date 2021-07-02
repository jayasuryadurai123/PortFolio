export const pageAnimation = {
    hidden:{
        opacity:0,
        y:300
    },
    show:{
        opacity:1,
        y:0,
        transition:{
            duration:1,
            when:"beforeChildren",
            staggerChildren: 0.35
        }
    },
    exit:{
        opacity:0,
        y:300,
        transition:{
            duration:.5
        }
    }
}

export const titleAnim ={
    hidden:{y:200},
    show:{
        y:0,
        transition:{
            duration:0.75,
            ease:'easeOut'
        }
    }
}

export const fade = {
    hidden:{
        opacity:0,
    },
    show:{
       opacity:1,
       transition:{
           duration:0.5,
           ease:"easeIn"
       }
    }
}

export const photoAni = {
    hidden:{ 
        scale:1.5,
        opacity:0
    },
    show:{
        scale:1,
        opacity:1,
        transition:{
            duration:.75,
            ease:"easeOut"
        }
    }
};

export const lineAni = {
    hidden:{
        width:'0%'
    }
    ,show:{
        width:'100%',
        transition:{duration: 1}
    }
}

export const slider = {
    hidden:{
        x:'-130%',
        skew:'45deg'
    },
    show:{
        x:'100%',
        skew:'0deg',
        transition:{
            duration: 1,
            ease:"easeOut"
        }
    }
}

export const sliderContainer ={
    hidden:{
        opacity:1,
    },
    shoe:{
        opacity:1,
        transition:{
            ease:'easeOut',
            staggerChildren:.15
        }
    }
}
export const scrollReveals = {
    hidden:{
        scale:1.2,
        opacity:0,
        transition:{
            duration:.5
        }
    },
    show:{
        opacity:1,
        scale:1,
        transition:{
            duration:.75,
            ease:"easeOut"
        }
    }
}