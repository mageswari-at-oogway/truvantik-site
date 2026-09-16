/** Supplied product truth: PRODUCT.md and original pages. Examples are not client results. */
export const startingPoints = [
  { id: 'exploring', title: 'We’re exploring AI.', text: 'Separate useful opportunities from expensive distractions.', next: 'Find your starting point', service: 'assessment' },
  { id: 'building', title: 'We know what to build.', text: 'Turn a clear use case into a dependable product.', next: 'Plan the build', service: 'build' },
  { id: 'unsticking', title: 'Our pilot has stalled.', text: 'Resolve the integration, ownership and adoption gaps.', next: 'Move beyond the pilot', service: 'integration' },
] as const;

export const services = [
  { id: 'assessment', phase: 'Assess', title: 'AI strategy & assessment', promise: 'Know what is worth building.', description: 'A useful starting point is a business decision, not a model. We examine your workflows, data and constraints to identify where AI can earn its place.', fit: 'You have competing ideas, uncertain data readiness, or need a credible case for investment.', outputs: ['A prioritised set of opportunities', 'A data and systems readiness review', 'A scoped roadmap with costs, risks and success measures'], question: 'Which workflow deserves attention first?', start: 'exploring' },
  { id: 'build', phase: 'Build', title: 'Custom AI product development', promise: 'Make the useful thing real.', description: 'Product engineering across the data pipeline, model, interface and evaluation. Built around the people who will use it and the systems it needs to work with.', fit: 'You have a defined problem and need a team to design, build and integrate the solution.', outputs: ['An integrated, instrumented product', 'An evaluation approach tied to the use case', 'A launch, monitoring and handover plan'], question: 'What would a working first release need to do?', start: 'building' },
  { id: 'integration', phase: 'Deploy', title: 'AI integration & deployment', promise: 'Put the capability to work.', description: 'The distance between a promising pilot and daily use is often systems access, failure handling and ownership. We work on that distance.', fit: 'A model or prototype exists, but security, integration or adoption is keeping it out of production.', outputs: ['Integration with your existing systems', 'Access controls, evaluation and monitoring', 'Clear ownership and operational handover'], question: 'What is keeping your pilot from being used?', start: 'unsticking' },
  { id: 'advisory', phase: 'Continue', title: 'Ongoing AI advisory', promise: 'Make the next decision well.', description: 'Engineering judgement for architecture, vendors, evaluation and team capability as your work develops.', fit: 'Your team is delivering and needs an experienced counterpart for consequential decisions.', outputs: ['Build-versus-buy and architecture reviews', 'Model and vendor evaluation', 'Guidance for your team’s next stage'], question: 'Which decision would benefit from another perspective?', start: 'advisory' },
] as const;

export const industries = [
  { id: 'healthcare', title: 'Healthcare', context: 'Reduce administrative friction without losing clinical oversight.', constraint: 'Patient information, auditability and clinician review.', workflows: ['Documentation and summarisation support', 'Patient intake and scheduling', 'Care coordination and follow-up'] },
  { id: 'retail', title: 'Retail & e-commerce', context: 'Keep product information and service operations useful at scale.', constraint: 'Supplier data quality, brand consistency and approval.', workflows: ['Catalogue enrichment', 'Demand and assortment forecasting', 'Service triage and agent assistance'] },
  { id: 'manufacturing', title: 'Manufacturing & industrial', context: 'Bring information closer to the people making decisions on the floor.', constraint: 'Operational reliability, environment and clear ownership.', workflows: ['Quality inspection support', 'Exception detection and resolution', 'Capacity and ETA forecasting'] },
  { id: 'consumer-tech', title: 'Consumer technology', context: 'Make AI a dependable part of the product experience.', constraint: 'Latency, cost per request and safe failure behaviour.', workflows: ['In-product assistants and search', 'Personalisation and ranking', 'Content moderation and safety'] },
] as const;

export const scenarios = [
  { id: 'onboarding', sector: 'Financial services', title: 'Less transcription. More judgement.', problem: 'Reviewers extract and re-check the same fields from inconsistent onboarding documents.', approach: 'Extract information, flag uncertainty and route exceptions to a person inside the existing case system.', measure: 'Review effort, extraction quality and traceability.' },
  { id: 'catalogue', sector: 'Retail & e-commerce', title: 'A catalogue the team can keep up with.', problem: 'Supplier data varies and content operations struggle to keep pace with new ranges.', approach: 'Normalise supplier feeds and prepare content for merchandiser approval before publication.', measure: 'Data completeness, approval effort and supplier quality.' },
  { id: 'inspection', sector: 'Manufacturing & industrial', title: 'An inspection pilot that reaches the line.', problem: 'A promising model has no route into the tools operators actually use.', approach: 'Connect the capability to the plant environment, make outputs actionable and name an operational owner.', measure: 'Usability on the line, exception handling and operational reliability.' },
] as const;

export const commitments = [
  { title: 'A business problem before a model.', body: 'Define the decision or workflow that needs to improve. Recommend a simpler fix when AI is not the right tool.' },
  { title: 'Your systems are part of the product.', body: 'Integration, permissions and failure behaviour belong in the plan from the start, not in a later phase.' },
  { title: 'Evaluation is part of engineering.', body: 'Agree what useful means, test against it and make uncertainty visible where a person needs to intervene.' },
  { title: 'Ownership outlasts the engagement.', body: 'Plan for monitoring, team adoption and handover. A finished demo is not the same as a system people use.' },
] as const;
