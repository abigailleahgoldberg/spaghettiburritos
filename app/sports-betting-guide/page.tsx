import Link from 'next/link';

export const metadata = {
  title: 'Sports Betting Guide 2026: How to Stop Losing Money | Spaghetti Burritos',
  description: 'The honest guide to sports betting in 2026. What works, what does not, and how to stop making the same mistakes every casual bettor makes.',
};

export default function SportsBettingGuidePage() {
  const G = '#FF4444';
  return (
    <div style={{minHeight:'100vh',background:'#0a0a0a',color:'#f5f5f5',fontFamily:'system-ui,sans-serif'}}>
      <nav style={{padding:'16px 5vw',borderBottom:'1px solid #1a1a1a',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <Link href="/" style={{fontWeight:900,fontSize:20,color:'#f5f5f5',textDecoration:'none'}}> Spaghetti Burritos</Link>
        <Link href="/blog" style={{color:'rgba(255,255,255,0.5)',textDecoration:'none',fontSize:14}}>← Back to Blog</Link>
      </nav>
      <div style={{maxWidth:800,margin:'0 auto',padding:'60px 5vw'}}>
        <div style={{fontSize:12,letterSpacing:'2px',color:G,marginBottom:16}}>SPORTS BETTING GUIDE 2026</div>
        <h1 style={{fontSize:'clamp(28px,4vw,52px)',fontWeight:900,lineHeight:1.1,marginBottom:24}}>How to Stop Losing Money on Sports Bets</h1>
        <p style={{fontSize:18,color:'rgba(255,255,255,0.6)',lineHeight:1.8,marginBottom:40}}>The honest guide nobody else will write. Not tips to win more — tips to lose less, which is actually the same thing.</p>
        
        {[
          {n:'01',h:'The House Edge Is Real',b:'Every sportsbook takes a cut. A standard -110 line means you bet $110 to win $100. That 10% vig is the sportsbook's margin. Over enough bets, the math works against you. The only way to beat the house is to be right more than the line implies — consistently. Most casual bettors are not. Knowing this going in changes how you bet.'},
          {n:'02',h:'Line Shopping Is Free Money',b:'The same game will have different lines at different books. If you can get +3.5 at one book versus +3 at another, that half-point costs you nothing to obtain and will matter in more games than you think. Having accounts at two or three books and checking before placing is the single highest-leverage habit a recreational bettor can build.'},
          {n:'03',h:'Parlays Are a Tax on Hope',b:'A two-team parlay pays roughly 2.6:1 when the true odds of hitting are 3:1 if both teams were even money. The sportsbook keeps the gap. A four-team parlay has roughly 15:1 true odds and pays 10:1. You are paying for the excitement of the chance. That is fine if you know what you are paying for. Do not bet parlays thinking you have found an edge.'},
          {n:'04',h:'Bet With Your Head Not Your Team',b:'Betting on your favorite team because you want them to win is entertainment spending, not investing. Betting against them to hedge your emotional investment is strategy. Know which one you are doing at all times.'},
          {n:'05',h:'Track Every Single Bet',b:'The number one cognitive bias in sports betting is remembering wins more vividly than losses. If you do not keep a spreadsheet, you do not know your actual record. You think you are winning. You are almost certainly not. Track everything: the bet, the line, the result, the unit size. Look at it monthly. The data will humble you and make you better.'},
          {n:'06',h:'Fade the Public in Big Games',b:'On highly publicized games, casual money pours in on the popular side. Books shade the lines to account for this. Fading the public — betting against the side everyone is on — has historically been a slight edge in large sample sizes. Not a guarantee. A lean.'},
        ].map(s => (
          <div key={s.n} style={{borderLeft:`3px solid ${G}`,paddingLeft:24,marginBottom:40}}>
            <div style={{fontSize:11,color:G,letterSpacing:'2px',marginBottom:8}}>{s.n}</div>
            <h2 style={{fontSize:22,fontWeight:800,marginBottom:12}}>{s.h}</h2>
            <p style={{color:'rgba(255,255,255,0.65)',lineHeight:1.8,fontSize:16}}>{s.b}</p>
          </div>
        ))}
        
        <div style={{background:'#111',border:`1px solid ${G}33`,padding:'32px',marginTop:40,textAlign:'center'}}>
          <div style={{fontSize:14,color:G,fontWeight:700,marginBottom:12}}>THE BOTTOM LINE</div>
          <p style={{fontSize:18,lineHeight:1.7,color:'rgba(255,255,255,0.8)'}}>Sports betting is entertainment with a negative expected value. Treat it like a movie ticket — know what it costs, enjoy the experience, do not expect to profit long-term. The people who do profit are doing it as a full-time job with spreadsheets and edges you do not have.</p>
        </div>
        
        <div style={{marginTop:48}}>
          <Link href="/blog" style={{color:G,fontWeight:700,textDecoration:'none'}}>← More takes from Spaghetti Burritos</Link>
        </div>
      </div>
    </div>
  );
}
