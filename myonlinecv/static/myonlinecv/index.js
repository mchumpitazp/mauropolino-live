document.addEventListener('DOMContentLoaded', function() {
    // Tooltips initialization
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    // Headline
    initHeadline();

    // Header
    headerNavbar();

    // Portfolio
    switchOnProjectHover();
    projectModal();

    // Window resize
    onWindowResize();
    
    setInterval(() => {console.log("Come on, just do it!")}, 10000);
    
})

async function initHeadline() {
    //await initTitle();
    //await initSubtitle();
    await displayPortrait();
    setTimeout(() => subtitleAnimation(), 800);
    document.querySelector('body').style.overflowY = 'auto';
}

async function initTitle() {
    let title = document.querySelector('#headline-left-title');
    let prob  = 0.4;
    let opac  = 0;

    await new Promise((resolve) => setTimeout(() => {
        title.querySelectorAll('span').forEach((span) => {
            if (span.innerHTML === "M" || span.innerHTML === "P") {
                span.style.visibility = 'visible';
            }
        });
        resolve();
    }, 500));

    
    for (let i = 0; i < 15; i++) {
        await new Promise((resolve) => setTimeout(() => {
            title.querySelectorAll('span').forEach((span) => {
                if (prob > Math.random()) {
                    span.style.visibility = 'visible';
                }
            });
            resolve();
        }, 20));

        await new Promise((resolve) => setTimeout(() => {
            title.querySelectorAll('span').forEach((span) => {
                if (span.innerHTML != "M" && span.innerHTML != "P") {
                    span.style.visibility = 'hidden';
                }
            });
            resolve();
        }, 100));

        if (0.8 < Math.random()) {
            await new Promise((resolve) => setTimeout(() => {
                resolve();
            }, 500));
        }

        prob += 0.02;      
    }

    await new Promise((resolve) => setTimeout(() => {
        resolve();
    }, 300));

    for (let i = 0; i < 25; i++) {
        await new Promise((resolve) => setTimeout(() => {
            title.querySelectorAll('span').forEach((span) => {
                if (span.innerHTML != "M" && span.innerHTML != "P") {

                    span.style.opacity = opac;
                    span.style.visibility = 'visible'
                } 
            });
            resolve();
        }, 60));

        opac += 0.04
    }
}

async function initSubtitle() {
    let subtitle = document.querySelector('#headline-left-subtitle')
    let cursor = subtitle.querySelector('#headline-left-typed-cursor')

    for (let i = 0; i < 3; i++) {
        await new Promise((resolve) => setTimeout(() => {
            cursor.style.visibility = 'hidden'
            resolve();
        }, 500));

        await new Promise((resolve) => setTimeout(() => {
            cursor.style.visibility = 'visible'
            resolve();
        }, 500));
    }

    await new Promise((resolve) => setTimeout(() => {
        resolve();
    }, 500));

    const initProfession = "SOFTWARE DEVELOPER"
    let text = subtitle.querySelector('#headline-left-typed-text')
    for (let i = 0; i < initProfession.length; i++) {
        await new Promise((resolve) => setTimeout(() => {
            text.innerHTML += initProfession.charAt(i);
            resolve();
        }, 70));
    }
}

async function displayPortrait() {
    let left   = document.querySelector('#headline-left');
    let right  = document.querySelector('#headline-right');
    let header = document.querySelector('#header'); 
    let footer = document.querySelector('#footer'); 

    await new Promise((resolve) => setTimeout(() => {
        document.querySelector('#headline-left').style.animationName = 'fade-out-opacity';
        document.querySelector('#headline-left').style.animationPlayState = 'running';
        resolve()
    }, 500));

    await new Promise((resolve) => setTimeout(() => {

        right.className += ' d-flex justify-content-center align-items-center';
        header.style.height = 'fit-content';
        header.style.position = 'sticky';
        header.style.top = '0';
        header.style.zIndex = '999';

        footer.style.height = 'fit-content';
        footer.style.position = 'sticky';
        footer.style.bottom = '0';
        footer.style.zIndex = '999';

        document.querySelector('#headline').style.height = (window.innerHeight - header.clientHeight) + 'px'

        if (innerWidth < 992) {
            resizeComponents(85, 50, 10);
        }

        left.style.animationPlayState = 'paused';
        left.style.animationName = 'fade-in-opacity';
        left.style.animationPlayState = 'running';

        right.style.animationPlayState = 'running'

        document.querySelector('#headline-left-text').style.display = 'block'
        document.querySelector('#headline-left-contact').style.display = 'block'
        resolve();
    }, 500));
    
}

async function subtitleAnimation(i = 1) {
    let text = document.querySelector('#headline-left-typed-text') 
    let professions = ['SOFTWARE DEVELOPER', 'PROGRAMMER', 'ELECTRONICS ENGINEER'];

    while (text.innerHTML != "") {
        await new Promise((resolve) => setTimeout(() => {
            text.innerHTML = text.innerHTML.replace(/.$/, '');
            resolve();
        }, 70));
    }

    let profession = professions[i]

    for (let k = 0; k < profession.length; k++) {
        await new Promise((resolve) => setTimeout(() => {
            text.innerHTML += profession.charAt(k);
            resolve();
        }, 70));
    }

    await new Promise((resolve) => setTimeout(() => {
        resolve();
    }, 700));

    i = i<2 ? i+1 : 0;
    return subtitleAnimation(i);
}

async function switchOnProjectHover() {
    // Initial state
    scaleUpProjectContainer();
    
    // On switch changed
    document.querySelector('#portfolio-switch').addEventListener('change', (e) => {

        document.querySelectorAll('.portfolio-child').forEach( async (project) => {
            if (e.target.checked) {
                project.classList.add('project-scaleup-container')
                project.querySelector('.project-img-container').classList.remove("project-scaleup-img");

            } else {
                project.classList.remove('project-scaleup-container')
                project.querySelector('.project-img-container').classList.add("project-scaleup-img");
            }
        });

    });

    async function scaleUpProjectContainer() {
        document.querySelectorAll('.portfolio-child').forEach( async (project) => {
            project.classList.add('project-scaleup-container');
            project.addEventListener('mouseover', zoomIn);
            project.addEventListener('mouseout', zoomOut);
    
            async function zoomIn() {
                /*
                document.querySelectorAll('.portfolio-child').forEach( async (proj) => {
                    if (proj != project) {
                        proj.querySelector('.project-img-container').style.flex = 'none';
                    }
                }); */
                
                project.style.animationPlayState = 'paused';
                project.style.animationName = 'minus-padding';
                project.style.animationPlayState = 'running';
                await new Promise((resolve) => setTimeout(() => resolve(), 200));
            }
    
            async function zoomOut() {
                project.style.animationPlayState = 'paused';
                project.style.animationName = 'plus-padding';
                project.style.animationPlayState = 'running';
                await new Promise((resolve) => setTimeout(() => resolve(), 200));
            }
    
        });
    }
}

function projectModal() {
    document.querySelector('#modal-btn-close').addEventListener('click', () => {
        document.querySelector('#modal').className   = ''
        document.querySelector('#overlay').className = ''
    })

    document.querySelectorAll('.portfolio-child').forEach(project => {
        project.addEventListener('click', () => {
            let modal = document.querySelector('#modal');
            let modal_icons = modal.querySelector('#modal-programming-languages');
            
            modal.querySelectorAll('.carousel-item').forEach(item => {
                if (item.id === "carousel-item-first") {
                    item.classList.add('active')
                } else {
                    item.remove();
                }
            });

            modal_icons.querySelectorAll('i').forEach(icon => icon.remove());
            
            let carousel_inner = modal.querySelector('.carousel-inner');
            let carousel_first = modal.querySelector('.carousel-item');
            carousel_first.querySelector('img').src             = project.querySelector('.project-img').src
            carousel_first.querySelector('img').alt             = carousel_first.querySelector('img').src   
            modal.querySelector('#modal-category').innerHTML    = project.querySelector('.project-category').innerHTML
            modal.querySelector('#modal-name').innerHTML        = project.querySelector('.project-name').innerHTML
            modal.querySelector('#modal-description').innerHTML = project.querySelector('.project-description').innerHTML
            modal.querySelector('#modal-link').href             = project.querySelector('.project-link').innerHTML
            modal.querySelector('#modal-year').innerHTML        = project.querySelector('.project-year').innerHTML

            let project_id = project.querySelector('.project-id').innerHTML
            fetch('/project_images/' + project_id)
            .then(response => response.json())
            .then(images => {
                images.forEach(image => {
                    const carousel_item = document.createElement('div');
                    const carousel_img  = document.createElement('img');
                    carousel_item.className = "carousel-item";
                    carousel_img.className  = "d-block w-100";
                    carousel_img.src = "/static/myonlinecv/media/" + image.name;
                    carousel_img.alt = image.name;

                    carousel_item.append(carousel_img);
                    carousel_inner.append(carousel_item);
                });
            }); 

            fetch('/project_languages/' + project_id)
            .then(response => response.json())
            .then(languages => {
                languages.forEach(language => {
                    const icon = document.createElement('i');
    
                    icon.className = "devicon-" + language.language + "-plain";
                    icon.setAttribute('data-toggle', 'tooltip');
                    icon.setAttribute('data-placement', 'top');
                    icon.setAttribute('title', language.language);
                    
                    modal_icons.append(icon);
                });

                // Tooltips initialization
                $(function () {
                    $('[data-toggle="tooltip"]').tooltip()
                });
            });


            modal.className = 'active';
            document.querySelector('#overlay').className = 'active';
        })
    });
    
}

function headerNavbar() {
    let header = document.querySelector('#header');

    header.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 992 & link.className != "navbar-brand") {
                header.querySelector('.navbar-toggler').click()
            }

            setTimeout(() => {
                const scrollY = 1.5 * document.querySelector('#header').querySelector('.navbar-brand').clientHeight;
                document.querySelector('body').scrollBy(0, -scrollY);
            }, 10);
        })
    })
}

function onWindowResize() {
    if (window.innerWidth < 992) {
        document.querySelectorAll('.coding').forEach((coding) => {
            coding.style.flex = '1 0 48%';
        });

        document.querySelector('#embedded-systems').style.display = 'none';
        document.querySelector('#portfolio-switch').style.display = 'none';
        document.querySelector('#headline-left-contact').style.fontSize = '2.2vh';
        document.querySelector('#headline-left-text').style.fontSize = '2vh';
        document.querySelector('#headline-left-subtitle').style.fontSize = '2.3vh';
        document.querySelector('#headline-left-title').style.fontSize = '5vh';
        document.querySelector('#modal').style.width = '90vw';
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth < 992) {
            resizeComponents(80, 50, 15);
            document.querySelectorAll('.coding').forEach((coding) => {
                coding.style.flex = '1 0 48%'
            });

            document.querySelector('#embedded-systems').style.display = 'none';
            document.querySelector('#portfolio-switch').style.display = 'none';
            document.querySelector('#headline-left-contact').style.fontSize = '2.2vh';
            document.querySelector('#headline-left-text').style.fontSize = '2vh';
            document.querySelector('#headline-left-subtitle').style.fontSize = '2.3vh';
            document.querySelector('#headline-left-title').style.fontSize = '5vh';
            document.querySelector('#modal').style.width = '90vw';

        } else {
            resizeComponents(45, 100);
            document.querySelectorAll('.coding').forEach((coding) => {
                coding.style.flex = '1 0 28%'
            });

            document.querySelector('#embedded-systems').style.display = 'block';
            document.querySelector('#portfolio-switch').style.display = 'block';
            document.querySelector('#headline-left-contact').style.fontSize = '1rem';
            document.querySelector('#headline-left-text').style.fontSize = '1rem';
            document.querySelector('#headline-left-subtitle').style.fontSize = '1.5rem';
            document.querySelector('#headline-left-title').style.fontSize = '4rem';
            document.querySelector('#modal').style.width = '40vw';
        }
    });

}

function resizeComponents(p_project, p_headline, factor = 0) {
    document.querySelectorAll('.portfolio-child').forEach((project) => {
        project.style.width = p_project + '%'
    });

    document.querySelector('#headline-left').style.height  = (p_headline + factor) + '%';
    document.querySelector('#headline-right').style.height = (p_headline - factor) + '%';
}
