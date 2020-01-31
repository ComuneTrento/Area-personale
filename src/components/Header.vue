<template>
    <div class="it-header-wrapper">
        <div class="it-header-slim-wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="it-header-slim-wrapper-content">
                            <a class="d-lg-block navbar-brand" href="#">Provincia Autonoma di Trento</a>
                            <div class="header-slim-right-zone">
                                <div class="nav-item dropdown">
                                    <a aria-expanded="false" class="nav-link dropdown-toggle" data-toggle="dropdown"
                                       href="#">
                                        <span>ITA</span>
                                        <svg class="icon icon-white d-none d-lg-block">
                                            <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-expand"></use>
                                        </svg>
                                    </a>
                                    <div class="dropdown-menu">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="link-list-wrapper">
                                                    <ul class="link-list">
                                                        <li>
                                                            <a class="list-item" href="#"><span>ITA</span></a>
                                                        </li>
                                                        <li>
                                                            <a class="list-item" href="#"><span>ENG</span></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- logged -->
                                <div v-if="$store.state.user" class="it-user-wrapper nav-item dropdown">
                                    <a aria-expanded="false" class="btn btn-primary btn-icon btn-full"
                                       data-toggle="dropdown" href="#">
                                        <span class="rounded-icon">
                                            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMQEhUTEhMWFRUVFxsXFhcWFRgYGBgXGBgXGBgVGhUaHSggGCAlHRgXITEiJSkrLi4uHR8zODMsNygtLisBCgoKDg0OGxAQGjElICYtLTAtLS0tLSstLy0tLTUtLS0tLS4tLS0tKy0tLS0tLS0tLy0tNS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAwQFBgcBAgj/xABDEAABAwEEBwUFBgUDAwUAAAABAAIRAwQSITEFBiJBUWGBE3GRocEHFDJSsSNCYnLR8BUzU4LhkrLxJKLCFyVDk+L/xAAaAQABBQEAAAAAAAAAAAAAAAAAAQIDBAUG/8QANREAAgECBAMFBAoDAAAAAAAAAAECAxEEBSExElGBEyJBYbEyUpGhFBUjJDNCccHR4TTw8f/aAAwDAQACEQMRAD8A2ivWa5pAIJIwCbWNhY6XCBESeiGWVzDeMQ3EwlKtQVhdbnnj++aAPNt+0i5tRMx0StlqBjYcYPApOiex+L72UY5f8rzVoGqbzYg8c8EAJOouLiQDBdM8pmU8tNUPaWtIJOQHevLbU0C4ZkbPKckjTsxpm+6IHDPh6oA7Y23CS/ZBEYotovkFm0AIwXqvUFUQ3CMTewEKEtGsjKILacVHTmDsDr97p4p8Kcpu0UR1KsKavJlgs1UMaA4gEZg96gLRpijTfN69Dphm1v45earVv0jUrkl7pncMG+H6porsMEvzsz6mYP8AIviWW362ueC1lMAcXGT4CI8Sop2m6+MVC2flAHnEqPQrUaFOOyKcsTVlvIWqWuo74qjz3vcfVJFxOZK4hSJJbETbe50GEo20vGT3juc4eqSQlaQibWxIWbTden8NQ9QHfUJ4NZXkzUY13NstPqoNCilQpy3RNHEVY7SL3YNZKD2hpcWGI2xAy+YYeKcWNhBa4/Dx3ZcVniXstsqUvgcWg5jce9uRVaeCX5WW6eYNe2vgaLbXB4AZtEGcOGK5YjcBD9kk71XNDaytafthdkRebiOozHmrA/7eHUyCMpnPuhUqlKUH3kaFOtCorxYnaaRe4uaJByI7gnjqzbt2RMRHOIhJ07QKYuOmRnGWOPqkvdSDfwib2+YmVGSnmy0yxwLhA4lK209pFzajOF6qVxVFxsyeOWGK80R2Ml2/KOSAPVjcGNh2BmYPDBNrRRc5xIBIORCVq0zWN5uQwx8fVKMtTaYumZGBjJAC/bt+YeKEy9xdxHj/AIQgD3732mzEXsJldNLsdqb26Mv3klKlmawFwGIxGKRs9Q1TdfiInhigD0B2/wCG71z/AOFw1+y2ImN+WaLQeyi5hOe/Je6NIVBedn4ZIA8iyTtzntRHHGEz0lppjGG+InIAy49w9U20xp02eWNguxAHAZAuP7lU2tVc8lzjJO/95K3QwznrLYpYnFqn3Y6v0HVv0m+tIJhvyjLr8yZIQtOMVFWRkSnKbvJghC49wAJJgDMlKNSudXipVa0S4gDmYUTbNLk4U8B8xGPQblFveSZJJPEmVmVsyhF2gr+hr4fKak1eo7eXj/RP1NLUxkSe4frCROmm7mHxAUKhUZZlXe1l0NGOVYdbpvr/AATI0035D4hLU9L0znLe8fpKgEIjmVdbtPoEsqw72TXX+S10qrXCWkHuK9qpMcQZBIPEGCpSx6XIwqYj5hn1G9XqGZQlpNW9DOxGUzgr03fy8SZQuMcCJBkHIhdWmtTIemgJ7ozSlSzuljsN7T8J6bjzCZISSipKzFjJxd0XrRtup2skh1x+9hxywkH7wT/3udiPwzPSVnFN5aQWkgjEEGCD3q2aC0wyrs1MKoxacg8jHLceXhwWbXwrh3o7GthsYp92e5OGz9ltzMbss8EA9vh8N3rmvFCsahuuxB6ZYr3aB2UFmE571TL5w1ex2YvTjOXL0XfdO025i9jH+V2z0xVF5+JBjhhn6pKraXMJa3IZIAU9/wDw+f8AhCW90Zw8yhADKg5xcAS4icZmI5p1bAA3YwM/dzjovVa0Nc0taZJEAYpvZaZpm88QIjr0QB7sQmb+PC9j4SorWHSnu5usO0RsgHAfiIH7Kc6et7GMD84kAZS45Dy8lRK1UvcXOMk5q3hqHG+J7FLF4ns1wx39DlR5cSXEkkyScyeK8oQtQxgQhCAOOcACSYAxKrukLaap4NGQ9Tz+idabtUnsxkMXd+4eqilh5hinKXZx2W50WWYJRj2s1q9vJAhCFlmwCEIQAIQhAAhCEAO7BbTSPFpzHqOasNN4cAQZBxBVTUloa13XXDk7Lk7/ACtPAYtwl2ctnt5GRmWCU4urBarfz/snEIQt05wEIQgC26D012jOzdAqj4XAQXjfiN8eKnLFjN/Hhex8JWbscQQQSCDIIzBGRCu+jdIm10xh9oz4xl3OHIrMxVDh70djXweJ41wS3H9skO2JAj7uAmTwTmgxpaC4CYxkCfNJWV4piH4GZjl07khWs7nuLmiQcjgqZfOX6nF3mhPvemfN9V1ADVtkLNokENxwXqrWFUXRhG0ScoC8ttZebpAAdhgoXWquKDOza43qgx5M3+Jw7pT6cHOSiiOrUVODkyvaWtvbPJB2Rg3u+br+iZIQtuMVFWRz85ucnJghCEo0F4r1LjS47hK9qO05UimB8x8hj9YUVep2dOUuSJsNS7WrGHNkG9xJJOZxPeVxCFyp2iVtAQhCQAQhCABCEIAEKW0Vq7WtNJ9WkAQw3bpMFxiTd3YSM+KinsLSQ4EEGCCIIPAg5IEucQhCBSz2Gv2jA7fv7xml1EaAqfG3ucPof/FS66jC1e0pRkzjsZR7KtKK2/kEIQrBWBOtGW51nqNqN3fEPmacx+98JqhI0mrMWLcXdGjN/wCoAqMOyRhPj6pVtqFMXSCS3DBVnVTSpYDRwP3mz/3D18VZm2QVBeJIJxwWLVpunJxOgoVVUgpHj3F3EeaEfxA8AhRkovVs7WAuAggSDJWd6Uthr1XPJmcB+UZfr1Vl05XdToum8L2wJkfFn5SqetDBQ0czLzCpqoL9QQhCvmaCEIQAKG0+7Fg5E/T9FMqF0+Npv5T9VSzD8B9PU0MrX3mPX0ItCELnDqgQhCABCEIAEtY7K6tUbTpiXPMAep4AZk8AkVpmpWrvuze1qj7Z4y/pt+X8x39BxkGylYndE6PbZqLKTMmjPiTi53UyVFa1atNtbb7IbWAwdkHAfdd6Hd3YKwITCG/iYbVplji1wLXNJBBzBGBBXlX32h6ElvvTBiIbVHEZNf0wB5EcFQk8ni7of6EdFXvaR9D6KfVd0Q6Krecj/tJ9FYl0GWP7Hqc1m6+36IEIQtAywQhCAFLPWLHNcM2kHv5dclfW24kAsdskAtwGRErPlddTbW11EscRLHYTHwuxHneVLGwvFS5GhgKlpOHMnPdWfL5ldTC7U/F5oWaaxA66W0PdTY04AFx7zgPofFVpSGnz/wBQ8TN0hvgBPnKj1tUI8NNI5/Ey4qsmCEIUpCCEIQAKD1hfD6Y4tf5Fn6lTiq2ulQtdQcMxfP8AsVLMXbDy6eqL+Wf5MevoxJKPs7w1ry0hjpDXRskjAgHjyTvS+inWahRruxbVY1xEQWPc0OFM444HPkerGw6RtlrFOx0dpgJcKbQ0D4i4ve84wJzJAy68/CDkro6adVROIXutTLHOa7AtJae8GCPELwmEoIAnAYzgIzJ4Ab04sFhqV3inSaXOO4bhxJyaOZUrYrYdEVz73ZHOJ/l1WuBEbywHZJ6hw5SnRi5bDJzUdyzan6p9jFe0D7TNjD9z8R/F9O/K4qh2n2pWYN2KNZzuDrjB1cHH6JKlo7SWlNu0VTZLOfhpsBD3N5tkHEfOf7Udk95aFd1Ll0tel7PRMVbRRpng+qxh8HEIsumLPV/lWijU/JVY7/aVXbJ7NrAwQ5lSpzdVc3yp3QuWz2a2B4hralPm2o53lUvItT5sLz5Ftr0Q9rmOEtcC0jiCIKxbSFkNCq+k7Nji2eIGTuog9VKaV1Vt2jWmrZbQ91JmJuFzXNA3upSWuA3kT3QovROknW62UhaIcXua1zgA28G8Q3CSBEiNyd2WnFF3HQqWdmI6PqxaqLeN8n/63x6q2KC1g0WLJpSkGTceA9g+WQ9hYDvxBP8AcFOrYymV6T/X9kYmcfjRfl+7BCELUMkEIQgAUrq089tcH3wR1G0PofFRScaOr9nVpv8AleCe6cfKUyrHig0SUZcNRPzNI98Zx8ihI/w/8XkhYZ0JndtqXqlR3F7j4uKRXXnE964t5Kysc23d3BCEJRAQhCABVPXrOiOT/wDwVsVQ14O3SHBrvMj9FRzJ/d5dPU0MrX3mPX0NDtFn9+0XTugFzqVJzRweA0OH+5qjfZ7YW2XSFts8yWNbcJzLA6fMPpykfZRpwOpusjjtMJfS5sJlzRzDiT3O5FPNcQ6wW6hpFoJpu+yrgZ5RPVuXOmOK56i73hzOhqqzTIHWazk26uxjS4l8hrQSTeAcYAxzJUtoXUarUh1oPZN+UQah9G+Z5BX+ximR2lIMIqQ++0DbkYOJGeHFLprY/jdtBro7R1KzsuUmBrd8Zk8XOOLj3qme1y2AUKNACX1Kt8CJIDAW4cy54HPaCvdWoGgucQGtBJJMAAYkkqg6tTpPSNS3EHsKH2dAEZuxgx3Oc88C5g3J9LR8T8CKfIortF2iwVKFe0Wd7WCox4kAh1xwcWGDgSAcDBW8UqgcA5plrgCCN4OIPUJlp7RjbXZ6lB2F9sA/K4Ytd0cAVW/Zxpcmm6xV9mvZiW3TmaYMCON07PddO9OnLtI35DYrhdi5oQhQEp5qva1pc74QCXTldAkz0WW+zDQQIZa3Zhz2tG4AUwL3eS8j+3mrL7R9M9lQFlpS6vadhrW5hjjdJ/u+Ed54KS0fZaejrGxj3ANosLqjhleMueRxlxMDuUl3Gm/MZvMoftCtX/udmaPuNpg976rpH+m6eqk1nmkNKOtFqdaHCC6oHx8rQRdb0aAOi0QrXyd9yS80ZOcxtKD8mcQhC2DGBCEIAFwrqEAXb+OngPP9UKp+8rqp/RUX/pjGrhiuJW1tio8cHuHg4pJW1qii1ZghCEogIQhAAqVro+a7RwpjxLn/AOFdVQdaal61VOV1o6NaT5krNzWVqFubRqZRG9e/JMjrNXdTe17HFr2mWuBggjeFs+pmlBpWxPZaWte4E06oAgOGDmOgZGN43tJELE1bvZjpj3a2BjjDLQBTPAPmaZ8SW/3rnYvU6Oaui109H6Q0QSLMPe7LJPZn+YycTAGIPNoIOJugpb/1KYNl9jtDanyQ3PhjDv8AtV7XZKm40/aRX4WtmZ1aBpDTEMdTNjshO3em+8DdBAL+QgN4kwFetGaPp2ak2jSbdYwQBv4kk7yTJJ4lOkJsp308BVG2oKp626rPr1G2qyP7K1U9+QqAYAE7nRhJBBGycMrYhJGTi7oVq5Qqevlezi7brDVa4ZvpjZdzAds9Q8juXX672q07NhsNQk5VKo2W+Gx4v6FX0FBKfxx34RvC+ZUtVdUnUahtVrf21qdvzbTnDDiYwmAAMAN5znXnWmrbK1SmHf8ATsqEMa3AOumA9x+9JBI3CRhOK1LXvTPudjqPBio/7OnxvvB2h+UBzuiwUBRzk5aslpRSArUKD7zWu+ZoPiJWXrRNX6t+zUjwbd/0y30Wpk8u/KPl/vqZecx7kZefr/wkEIQt458EIQgAQhcKAHHu54IVp9wHE+CFT+krkXfokiv6fs/Z2io3nI6gH6kqPU5rWCajXn7zbp72n/8AXkoNT0JcVNMgxEeGrJeYIQhSkIIQhAAFmdvrdpVqP+Z7iO4kx5K/6atXZUKj992G/mdsjzM9FnAWHnFTWMOpvZNT0lPoC6DwJHMYEcwdy4hYpuG+alaeFusrahP2jdiqODwPijg4Q4d8blPLBdStYzo+0B5k0nw2s0Y7M4PA4tJJ5gkb1u9Gq17Q5pDmuALSDIIOIIKeQSVme0IQgQEIQgAQhUv2k60+6UuwpO+3qjMZ06ZwL+ROIb1O7EDco/tJ1g97tNxhmlQljYyc+ftH88QGj8s71UUAITGTpWVgV01LrzRcz5H+TgCPO8qWpzVG2dnXunKoLv8AcMW+o6q7l9Tgrxv46fEpZjS7TDyS8Nfh/ReEIQupOTBCEIAEtZGXqjBxcB0kSkVMaqWTtLQJya0uP+0eZnomVJcMGx9KPFNLzLr7kPm8lxIe+v4jwXFh6nRDbWuxNfZ3FoEsN/CMhg7yJPRURaGyykGXN2d+WW9UO3WbsqjmZhpwPEZg+ELRwU9HEy8wp2amIIQhXjOBCEIAretdOtVLadOm9zG7RIGBdkB0E+PJV7+DWj+i/wAFoqFnV8uhWm5yk/kaVDM50YKEYrT9TOv4NaP6L/BH8GtH9F/gtFXWNJMAEk5ACSe4BRfVFL3n8ib65q+6vmZz/BbR/Rf4LYPZ4XUdH0G1QWkGoCDm2a1Qt6RC96P1VrVIL4pt54u/07up6KwHRTaNMMbJaM5zkkmfEqhisLTpRvTk2y9hsVWrP7SKSHAKFEU67qRjMcPUcE9p6QYc5HSfoqFy4OkJu62sG/yKa1tIk4NEczn4IuA7tVqDBxO4epWHazaOtFW12h/Zvdequh0TLQYbHIAADkAtdo0nVHADEnf6le9J6pXpdSficS1+RPJwy7oKtYWjCq3xuyK+IrVKSvTV2YZ/BbR/Rf4I/gto/ov8FptssVSiYqMLTunI9xyKbrTWU0nqpP5Gc84qp2cV8zOv4LaP6L/Bdboe0ggilUBGIIGRGRWiIS/VFP3n8hPrmp7q+Y00VaH1KYNVhY8YOBEAn5hyPknaELUgmopN3MmclKTaVvIEIQnDQVl1XouaxzxIvmBE5N/yT4Ku0qZe4NaJLiABzOAWj2Eso020yYuAAqnjJ2jw8y/gKd58XIdXG8G+AQo73V/y/RCzDXHLrWHi6AQXYYwq3rXootaKuBjZdHA5HofqrG6yBm0CSW4rxf7eWOGBGMb90eakpVHCSkRVqaqQcWZuhPdL6PNnqlhyzaeLTkfQpktqMlJXRz8ouLswQhJ167aYvPcGjiTH/KW4iV9hRcc4AEkgAZkmAOqr9u1naMKLbx+Z2A6NzPkq/bLbUrGaji7gMgO5owVaeJjHbUuU8HOWstC76P0pQrV2UO0+MwHAS2YwbJIzOAIwkhaBouxss5lgM5EkySN44DosBBjEGCMQRgQeIK2vVHTYttnbUMdo3Yqj8YHxRwcNrqRuVSdaU9GX6eGhT1S1Lq0ziEESmWj633T0/RPlVaLSZD6Q0fvGXmP8KHq0i3Px3K4JpXsIdiMD5eCpVMN4w+BYhV8JFXStnoOqGGiT5DmVL0dFtdiYiY2ZUlQoNYIaIH7370ynh5P2tB0qqWwjYLEKQ4k5n07k7QvFaoGgk7lejFJWRWbvqxjpe69ppkSHZ9yoesNnp2QNc6oA17rrQ7OYnMCIHHDMcVcnuLjJzKxnXnTfvdpN0zSpSynwOO08fmO/gGq1SqSp7FarRhV9os7XAiQQQciDI8V1Z9Y7dUomabiOIzB72nBWKwazNdhVbdPzNkt8Mx5q9DExlvoZtXBzhrHVE+heKVVrxeaQ4HeDI8V7VgqAhCVs1A1HBjcyfDiT3IbsrsEm3ZE1qnZwHms4GG4N/Mcz0H15K0uspqbQIh2OOaS0fYW9m1okBgu4b95J5kkpV1rNPZABDcMVi1qnaTudBQpdlBRFff28D5fqhHuLeJ8lxREwhStDnENcZBwIgJe0sFMXmYGYnPDr3JSuW3TdiYwiJ6Qm1jkO25iPvZThxQAy0ho/3um4E7bMWHLE5gxuMKj1GFpLXAggwQcwRuWj23GLnObvTOFCac0N2rO0bhVGYOBeN3Xhxy4K5ha/A+GWxQxmG41xx3M21h0u6iQynF4iSSJgZCBlOefJVWvXdUN57i48SZ/4SmkbSatV7zOLjAOYAwAI3EAY85TdJVqOcvIloUVTitNQQhCiJwU7qbp33K0Bzj9k+G1eQ3P/ALTj3F3FQSEAfQzXRBB5gj6qYoVbzQfHvWXezbWHtGe61Dt0xNIn71Mfc72/7fyrQbFWuug5H9ymyVxIuzJRNbdXuiBmfIJerUDRJUDpG2imypWqE3WNL3RiYaJgBNirjpMd2SvcPI5/qpYFUPVjWunby9rWOY5gDocQZaTEgjeDEjmMSrfYK87J6d3BLJeIkX4D1RlurXjAyH1Tu2V7rcMzl+qgdJ29lmpPrVDDGCTxJyDRxJMAIivEJPwK77QtPe7UOyYftawIEZtp5PfyJ+Ed5O5ZKnumNJvtVZ9apm44Dc1o+Fg5AeOJ3pkniIEIQgUWstqfSMscWnlv7xkeqt2gNKmu1wfAe2MsJB3x3+ipae6HtnY1WvJhuTvynM9MD0U1Go4yXIrYiiqkHpqXxXPVbRIYCXjbIG/4R8uHn/hM9WNDw5tWq2Bm0EYDg4+isltxAudbvrCdiq9+5HqRYLDcP2kugnaXmkbrMBE8ccePcl6Nna9oc4STmZPovNjIDdvOfvZxhxTe0B143b0bomOkKiaIe+P4+QQpC83i3yQgBhSszmEOcIAxOKXtFQVRdZic+GHXvXk2sVNmIvYSuNpdjtEzujL95IA7Zj2U38Jy35dy8V6JqG83EHpl3r24dvls3euf/CBX7LYImN/egCj696lstP21nhtoA+0Zk2qRhnkH88jv4jJqtNzHFrgWuaYc1wggjMEHIr6Q90nbnPaiOOMKu61asUNJwY7KvENqjGQBIa9v3h5jcdxcpCNGHoUnp7QNew1LldhbPwvGLH82u392Y4KMTxoIQhKApZrQ6k9tRji17CHNIzBG/wDxvW1asaeZbqIqCA9uzUZ8ruI/CcwemYKxFSOgdMVLHWFWnjue05PbvafQ7jHcgQ3mpWLgAd37lN61Jr2uY8BzXAtcDkQRBBTbRGk6dqpNq0jLXbt7XDNjhuI/yMCvWlKz6dGq+k2/UaxzmNgm84NJAgZ47kCDbQ2gLPY73YMul8XiXOcYGQlxMDFSgMYjMKl+z3TlqtRrCvtMaAWvuBsOJMswABwx4iOYV0CAPVeteJc4gR4ADmsd131l98qXKZ+wpnY/G7I1D5gDhjvUrr/rZ2t6y0HTTGFV4++R/wDGD8o3nfllM0RAqBCEIFBCE60bo6raXinRYXu5ZAfM52TRzKAGq0zUfUBzSy02tmUOZSdu336g48G7t+OAmdTtQGWYNrVHCpW3GNmnu2Acz+I48IVv97B2Iz2Z8pUblyHJHa9YVG3WmSe8ZLxZh2Ul+E5b/ogWfstsmY3d+C653b4DZu9c00U82hhqm8zEARwxxO/vS1K0NYA1xxGeBSbavY7JxnHhy9Fw2TtNqYvYxCAE/cn8vFCW9/Hy+a6gAfZWsF4EyMROSTpVTWN12Azw/wA96SoV3OcATIJxCc2tgptlogzEjggDxVPYxdxvZzy7o4r1ToCqLzpk8MsFyxfaTf2oylJ2qoWOhpgcAgDptbgbgiAbu+YGHFKVLMKYvtmRxyxw9Uqyi0tDiBJEzziZTSzVS9wa4yDmOiAOVaLLW00qzGuYRJaRIPjKzvWn2aBhvWN+ePZVD5NqejvFaXbGimAWbJJjBFjaKgJftEGMUqdgsfOlvsFWzuuVqbqbtwcInmDk4cwSE2X0PpagypepPY19PDYc0OblwIVa0x7L7LUBdRc+g6JgG+yc/hcZHRwCcpDbGOoVutns7tjSey7OsN11113Vr4Hg4qCt2grVQ/m2eqzmabrv+oCPNOuIK6uafqWGpfZi04VKZODx6Ebj9Rgti0Npala6Yq0XSMiDg5jt7XDcfI5iQsFvjKRPen+iNLVbJU7Si+6ciM2uHyubvHmN0JRDeZlZ1rxrnN6z2V2GVSq058WMI83dBxUZrHr1VtVMUqbexaR9rDpLjvaHbmeZyyzp5eBvHigEj0hPLLomvV/l0Krp3im4jxiFYtF+zm318SxlJvGo8T0ay8ehhJcUqKVstmfVcGU2Oe85NY0uPgFpmjvZtQpu+3qPqkGC1v2bDjyJd4OCv1DRVGy0yKFJlID5GgTzJ3nmU1yFsZdoX2aVSBUtjuyaT/KYQah37ThLWdJ6LSdCaIo06dylTFNrTkzeeLnGS48yU6sbu0JDtoATjxRbHdmQGbII3JrbYtjlS0GkSxsQOOeOPqlTZWgX5M/FynNerNSD2hzhJOZ6wmorOvXZwvRHKYhIKKU65qm46IPDPDFeqo7HFuM5zy7kpaqYY0uaIPHqkrEe0m/tRlKAO0qYrC87AjDDhnv714fanUzdEQMBMz9UWx5puhpgRMDjJTihRa5oLgCSMSgDnuLeJ8R+i4mnvL/mPkuoAkLT8Du5M9HfEe79EIQB70n93r6Jew/AOv1QhADGp/M/u9U/tfwH9711CAGmjfiPd6o0lmO5CEAOrH8A/e8qPZ/MH5vVdQgB7bfgPT6pHRn3unquoQBXtdMx+X9Vj+mfiXUKRDGIaL+NvetY1Y9AhCGBcbFv6Jvb/j6BcQox5IU/hHcPoo6x/G397kIQA60j8I7/AEKNG/Ce/wBEIQA2tvxnp9ApB3wn8vohCAGFh+PoUvpLId6EIA9aO+E9/oEztXxnv9F1CAJNCEIA/9k="
                                                 width="20" class="border rounded-circle icon-white" alt="Mario Rossi"></span>
                                        <span class="d-none d-lg-block">{{user.nome}} {{user.cognome}}</span>
                                        <svg class="icon icon-white d-none d-lg-block">
                                            <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-expand"></use>
                                        </svg>
                                    </a>
                                    <div class="dropdown-menu" x-placement="bottom-start"
                                         style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(-108px, 41px, 0px);">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="link-list-wrapper">
                                                    <ul class="link-list">
                                                        <li>
                                                            <a class="list-item" href="#"><span>Recenti</span></a>
                                                        </li>
                                                        <li>
                                                            <router-link v-bind:to="'personal'" class="list-item">
                                                                <span>Le mie pratiche</span></router-link>
                                                        </li>
                                                        <li>
                                                            <router-link v-bind:to="'personal'" class="list-item">
                                                                <span>Pagamenti</span></router-link>
                                                        </li>
                                                        <li>
                                                            <router-link v-bind:to="'personal'" class="list-item">
                                                                <span>Documenti</span></router-link>
                                                        </li>
                                                        <li>
                                                            <router-link v-bind:to="'personal'" class="list-item">
                                                                <span>Messaggi</span></router-link>
                                                        </li>
                                                        <li>
                                                            <span class="divider"></span>
                                                        </li>
                                                        <li>
                                                            <router-link v-bind:to="'profile'"><span>Profilo</span>
                                                            </router-link>
                                                        </li>
                                                        <li>
                                                            <a class="list-item" href="#" @click="logout()"><span>Logout
                                                                <svg class="icon icon-primary icon-sm left">
                                                                    <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-arrow-right"></use>
                                                                </svg></span></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- not logged -->
                                <router-link v-else v-bind:to="'login'" class="btn btn-primary btn-icon btn-full"><span
                                        class="rounded-icon">
                                            <svg class="icon icon-primary"><use
                                                    xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-user"></use></svg>
                                        </span>
                                    <span class="d-none d-lg-block">Accedi all'area personale</span></router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="it-nav-wrapper">
            <div class="it-header-center-wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="it-header-center-content-wrapper">
                                <div class="it-brand-wrapper">
                                    <a href="#">
                                        <img class="icon" src="../../public/Trento-logo-removebg-preview.png">

                                        <div class="it-brand-text">
                                            <h2 class="no_toc">Comune di Trento</h2>
                                            <h3 class="no_toc d-none d-md-block">Area personale</h3>
                                        </div>
                                    </a>
                                </div>
                                <div class="it-right-zone">
                                    <div class="it-socials d-none d-md-flex">
                                        <span>Seguici su</span>
                                        <ul>
                                            <li>
                                                <a href="#" aria-label="Facebook" target="_blank">
                                                    <svg class="icon">
                                                        <use xlink:href="bootstrap-italis/svg/sprite.svg#it-facebook"></use>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" aria-label="Github" target="_blank">
                                                    <svg class="icon">
                                                        <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-github"></use>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" aria-label="Twitter" target="_blank">
                                                    <svg class="icon">
                                                        <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-twitter"></use>
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="it-search-wrapper">
                                        <span class="d-none d-md-block">Cerca</span>
                                        <a class="search-link rounded-icon" aria-label="Cerca" href="#">
                                            <svg class="icon">
                                                <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-search"></use>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="it-header-navbar-wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <nav class="navbar navbar-expand-lg has-megamenu">
                                <button aria-controls="nav10" aria-expanded="false" aria-label="Toggle navigation"
                                        class="custom-navbar-toggler" data-target="#nav10" type="button">
                                    <svg class="icon">
                                        <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-burger"></use>
                                    </svg>
                                </button>
                                <div class="navbar-collapsable" id="nav10">
                                    <div class="overlay"></div>
                                    <div class="close-div sr-only">
                                        <button class="btn close-menu" type="button">
                                            <span class="it-close"></span>close
                                        </button>
                                    </div>
                                    <div class="menu-wrapper">
                                        <ul class="navbar-nav">
                                            <li class="nav-item ">
                                                <router-link class="nav-link" to="amministrazione">
                                                    <span>Amministrazione</span></router-link>
                                            </li>
                                            <li class="nav-item ">
                                                <router-link class="nav-link" to="novità"><span>Novità</span>
                                                </router-link>
                                            </li>
                                            <li class="nav-item ">
                                                <router-link class="nav-link" to="servizi"><span>Servizi</span>
                                                </router-link>
                                            </li>
                                            <li class="nav-item active">
                                                <router-link class="nav-link" to="documenti"><span>Documenti</span>
                                                </router-link>
                                            </li>
                                        </ul>
                                        <ul class="navbar-nav navbar-secondary">
                                            <li class="nav-item ">
                                                <a class="nav-link " href="#">
                                                    Argomento 1</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">
                                                    Argomento 2</a>
                                            </li>
                                            <li class="nav-item ">
                                                <a class="nav-link " href="#">
                                                    <span class="font-weight-bold">Tutti gli argomenti...</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>


<script>
  import {app} from '../main.js';

  export default {
    name: 'Header',
    methods: {
      logout() {
        this.$store.commit('SET_USER', null);
        this.$router.push('/');
      },
    },
    created() {
      // Using the server bus
      app.$on('loginEvent', (user) => {
        this.user = user;
      });
    },
  };
</script>

<style scoped>
    .dropdown-menu a {
        width: 400%;
    }
</style>
