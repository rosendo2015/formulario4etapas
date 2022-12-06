import { Router } from "./routes.js"
const router = new Router()

router.add("/step1", "/pages/step1.html")
router.add("/step2", "/pages/step2.html")
router.add("/step3", "/pages/step3.html")
router.add("/step4", "/pages/step4.html")
router.add("/step5", "/pages/step5.html")

router.handle() //mostrar o conteudo do index
window.onpopstate = () => handle() //para ativar a navegação pelas cetas do navegador
window.route = () => router.route()