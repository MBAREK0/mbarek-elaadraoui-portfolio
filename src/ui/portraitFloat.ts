import gsap from 'gsap';

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

/**
 * Professional levitate: soft vertical drift + matching ground shadow.
 * Subtle enough for a portfolio hero — no bounce, no tilt gimmicks.
 */
export function startPortraitFloat(root: ParentNode = document): () => void {
  const stage = root.querySelector<HTMLElement>('.hero__portrait-stage');
  const shadow = root.querySelector<HTMLElement>('.hero__portrait-shadow');
  if (!stage) return () => undefined;

  if (reducedMotion.matches) return () => undefined;

  const float = gsap.timeline({ repeat: -1, yoyo: true, defaults: { ease: 'sine.inOut' } });

  float.to(
    stage,
    {
      y: -12,
      rotation: 0.45,
      duration: 3.4,
    },
    0,
  );

  if (shadow) {
    float.to(
      shadow,
      {
        scaleX: 0.78,
        scaleY: 0.62,
        opacity: 0.42,
        duration: 3.4,
      },
      0,
    );
  }

  const onMotionChange = () => {
    if (reducedMotion.matches) float.pause(0);
    else float.play();
  };
  reducedMotion.addEventListener('change', onMotionChange);

  return () => {
    reducedMotion.removeEventListener('change', onMotionChange);
    float.kill();
    gsap.set([stage, shadow].filter(Boolean), { clearProps: 'all' });
  };
}
