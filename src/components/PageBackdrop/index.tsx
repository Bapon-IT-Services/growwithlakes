import * as S from './index.style';

export default function PageBackdrop() {
  return (
    <S.Root aria-hidden>
      <S.Mesh />
      <S.BlobGold
        style={{ top: '-12%', left: '10%' }}
        animate={{
          x: [0, 28, -12, 0],
          y: [0, 18, -22, 0],
          scale: [1, 1.06, 0.98, 1],
        }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />
      <S.BlobGold
        style={{ bottom: '5%', right: '-5%' }}
        animate={{
          x: [0, -36, 14, 0],
          y: [0, -24, 16, 0],
          scale: [1, 1.08, 0.96, 1],
        }}
        transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <S.BlobMist
        style={{ top: '38%', right: '8%' }}
        animate={{
          x: [0, -20, 24, 0],
          y: [0, 30, -10, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <S.Noise />
    </S.Root>
  );
}
