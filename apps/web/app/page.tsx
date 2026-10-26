"use client";

import { useState } from "react";

const groups = [
  { label: "GESTÃO", items: ["Visão geral", "Obras e contratos", "Planejamento / EAP", "Diário de obras (RDO)", "Medições"] },
  { label: "OPERAÇÃO", items: ["Orçamentos / SINAPI", "Compras e suprimentos", "Estoque", "Equipamentos", "Qualidade", "Segurança do trabalho"] },
  { label: "ADMINISTRAÇÃO", items: ["Financeiro", "Recursos humanos", "Documentos", "Licitações", "CRM comercial"] },
  { label: "INTELIGÊNCIA", items: ["Indicadores / BI", "MARI — Coordenadora IA", "Configurações"] }
];

export default function Home() {
  const [active, setActive] = useState("Visão geral");
  return (
    <div className="sgi-shell">
      <aside className="sidebar">
        <div className="brand">MELO DINIZ <span style={{color:"#a7d4b8"}}>ENGENHARIA</span><small>Sistema de Gestão Integrada · SGI</small></div>
        {groups.map(group => <div key={group.label}>
          <div className="nav-label">{group.label}</div>
          {group.items.map(item => <button key={item} className={`nav-item ${active === item ? "active" : ""}`} onClick={() => setActive(item)}>{item}</button>)}
        </div>)}
      </aside>
      <main className="main">
        <header className="topbar">
          <div><strong>SGI Melo Diniz</strong><span className="subtle">　/　{active}</span></div>
          <div className="subtle">Ambiente de demonstração　 ·　 Administrador</div>
        </header>
        <div className="content">
          <div className="eyebrow">CENTRAL DE COMANDO</div>
          <h1 className="page-title">{active}</h1>
          <div className="subtle">Acompanhamento integrado de obras, custos, produtividade e suprimentos.</div>
          <section className="cards">
            {[
              ["Obras em andamento", "08", "2 em fase de acabamento"],
              ["Avanço físico médio", "64,8%", "Referência demonstrativa"],
              ["Orçamento contratado", "R$ 2,48 mi", "Dados fictícios para protótipo"],
              ["Pendências críticas", "12", "Requer análise da equipe"]
            ].map(([label,value,note]) => <div className="metric" key={label}><div className="metric-label">{label}</div><div className="metric-value">{value}</div><div className="metric-note">{note}</div></div>)}
          </section>
          <section className="columns">
            <div className="panel">
              <h2>Obras em destaque</h2>
              {[
                ["Residencial Cosmópolis", "78%", "Em execução"],
                ["Adequação industrial — Unidade A", "52%", "Atenção ao prazo"],
                ["Reforma comercial — Campinas", "31%", "Em execução"],
                ["Sistema de climatização — Contrato 04", "86%", "Próximo da conclusão"]
              ].map(([name,pct,status]) => <div className="module-row" key={name}><div style={{flex:1}}><strong>{name}</strong><div className="progress"><span style={{width:pct}} /></div></div><span className="pill">{status}</span></div>)}
            </div>
            <div className="panel">
              <h2>Central de ações</h2>
              {[
                ["Compras aguardando aprovação", "4 solicitações"],
                ["RDOs para revisar", "3 diários"],
                ["Documentos próximos do vencimento", "2 documentos"],
                ["Alertas de cronograma", "3 alertas"]
              ].map(([name,detail]) => <div className="module-row" key={name}><div><strong>{name}</strong><div className="subtle" style={{marginTop:5}}>{detail}</div></div><span className="pill">Verificar</span></div>)}
            </div>
          </section>
          <p className="subtle" style={{marginTop:18}}>Protótipo inicial. Indicadores e nomes de obras são ilustrativos, não representam dados reais.</p>
        </div>
      </main>
    </div>
  );
}
