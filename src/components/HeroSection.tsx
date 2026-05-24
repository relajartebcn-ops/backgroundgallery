import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import hero from "@/assets/real-piedras.jpg";
import heroVideoMobile from "@/assets/hero-bg-mobile.mp4";
import heroVideo from "@/assets/hero-bg.mp4";

// ── Partículas doradas ───────────────────────────────────────────────────────
const GoldParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    type Particle = {
      x: number; y: number; size: number;
      speedY: number; speedX: number;
      opacity: number; opacitySpeed: number;
    };

    const count = 38;
    const particles: Particle[] = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2.2 + 0.5,
      speedY: -(Math.random() * 0.45 + 0.15),
      speedX: (Math.random() - 0.5) * 0.2,
      opacity: Math.random(),
      opacitySpeed: Math.random() * 0.008 + 0.003,
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,168,76,${p.opacity.toFixed(2)})`;
        ctx.fill();

        p.y += p.speedY;
        p.x += p.speedX;
        p.opacity += p.opacitySpeed;
        if (p.opacity > 1 || p.opacity < 0) p.opacitySpeed *= -1;
        if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

// ── Variantes de animación ───────────────────────────────────────────────────
const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

// Anima "obra de arte" palabra a palabra
const goldWords = ["obra", "de", "arte"];
const wordVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.6 } },
};
const singleWordVariant: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

// ── Componente principal ─────────────────────────────────────────────────────
export const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax en imagen de fondo
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <section ref={sectionRef} id="top" className="relative min-h-screen flex items-center overflow-hidden">

      {/* Fondo con parallax */}
      <motion.div className="absolute inset-0 -z-10" style={{ y: bgY }}>
        <img
          src={hero}
          alt="Sesión real de masaje con piedras calientes en RelajArte BCN, Barcelona"
          className="h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-vignette" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
      </motion.div>

      {/* Partículas doradas flotantes */}
      <GoldParticles />

      {/* Contenido */}
      <div className="container pt-32 pb-20 relative" style={{ zIndex: 2 }}>
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-gold/40 bg-background/40 backdrop-blur-sm text-xs uppercase tracking-[0.3em] text-brand-gold-soft mb-8">
              <Sparkles className="h-3.5 w-3.5 text-brand-gold" />
              Sagrada Familia · Barcelona
            </div>
          </motion.div>

          {/* H1 */}
          <motion.h1
            className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.02] mb-8 text-foreground"
            variants={itemVariants}
          >
            Tu bienestar
            <br />
            es una{" "}
            <motion.span
              className="italic text-gradient-gold"
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              style={{ display: "inline-flex", gap: "0.22em" }}
            >
              {goldWords.map((word) => (
                <motion.span key={word} variants={singleWordVariant} style={{ display: "inline-block" }}>
                  {word}
                </motion.span>
              ))}
            </motion.span>
            <span className="text-brand-gold">.</span>
          </motion.h1>

          {/* Párrafo */}
          <motion.p
            className="text-base md:text-lg text-foreground/80 max-w-xl mb-12 leading-relaxed font-light"
            variants={itemVariants}
          >
            Masajes profesionales en un santuario privado junto a la Sagrada Familia. Sesiones personalizadas en un entorno climatizado diseñado para tu desconexión total.
          </motion.p>

          {/* CTAs */}
          <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
            <a
              href="#contacto"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-gold text-background font-medium tracking-wide uppercase text-xs hover:shadow-[var(--shadow-glow-gold)] transition-all duration-500"
            >
              Reservar Cita
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-brand-gold/50 text-brand-gold-soft uppercase tracking-wide text-xs hover:border-brand-gold hover:bg-brand-gold/5 hover:text-brand-gold transition-all duration-300"
            >
              Ver Servicios
            </a>
          </motion.div>
        </motion.div>

        {/* Línea dorada animada */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="origin-left mt-20 h-px bg-gradient-gold max-w-2xl animate-pulse-line"
        />
      </div>
    </section>
  );
};

export default Hero;
