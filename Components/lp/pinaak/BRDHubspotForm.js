import React, { useState, useMemo } from 'react';

// --- Main Component ---
function BRDHubspotForm() {
  // --- State Management ---
  const [currentSlideId, setCurrentSlideId] = useState('1');
  const [formData, setFormData] = useState({});
  const [slideHistory, setSlideHistory] = useState(['1']);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // --- Form Structure and Logic Configuration ---
  const slidesConfig = useMemo(() => ({
    '1': { 
      component: IndustryStep, 
      step: 1,
      next: (data) => data.industry 
    },
    'banking': { 
      component: BankingStep, 
      step: 1,
      parent: '1',
      next: '2'
    },
    'healthcare': {
        component: HealthcareStep,
        step: 1,
        parent: '1',
        next: '2'
    },
    'other': {
        component: OtherIndustryStep,
        step: 1,
        parent: '1',
        next: '2'
    },
    '2': { 
      component: VersionStep, 
      step: 2,
      next: '3'
    },
    '3': { 
      component: EnvironmentStep, 
      step: 3,
      next: '4'
    },
    '4': { 
      component: ContactStep, 
      step: 4,
      isLast: true
    },
  }), []);

  // --- Event Handlers ---
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      const currentValues = formData[name] || [];
      const newValues = checked
        ? [...currentValues, value]
        : currentValues.filter(v => v !== value);
      setFormData(prev => ({ ...prev, [name]: newValues }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleNext = () => {
    const currentConfig = slidesConfig[currentSlideId];
    if (!currentConfig) return;

    let nextSlideId;
    if (typeof currentConfig.next === 'function') {
      nextSlideId = currentConfig.next(formData);
    } else {
      nextSlideId = currentConfig.next;
    }
    
    if (nextSlideId && slidesConfig[nextSlideId]) {
      setSlideHistory([...slideHistory, nextSlideId]);
      setCurrentSlideId(nextSlideId);
    }
  };

  const handleBack = () => {
    const newHistory = [...slideHistory];
    newHistory.pop();
    const prevSlideId = newHistory[newHistory.length - 1];
    
    if (prevSlideId) {
      setCurrentSlideId(prevSlideId);
      setSlideHistory(newHistory);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted Data:', formData);
    setIsSubmitted(true);
  };
  
  // --- Render Logic ---
  const currentConfig = slidesConfig[currentSlideId];
  const CurrentSlideComponent = currentConfig.component;
  
  if (isSubmitted) {
    return (
        <div className="configurator-container">
            <div className="cf-result">
                <div className="cf-result-title">Thank you for your request!</div>
                <p>We will analyze your case and get back to you within a business day.</p>
            </div>
        </div>
    );
  }

  return (
      <div className="configurator-container">
        <div className="cf-header">
          <h2>How Much Will It Cost to Develop Your Web App?</h2>
          <p>Please answer a few quick questions to help us calculate a tailored estimate.</p>
        </div>

        <div className="cf-nav">
          {[1, 2, 3, 4].map((step, index, arr) => (
            <React.Fragment key={step}>
              <div
                className={`cf-step ${currentConfig.step > step ? 'completed' : ''} ${currentConfig.step === step ? 'active' : ''}`}
              >
                {currentConfig.step <= step && step}
              </div>
              {index < arr.length - 1 && <div className="cf-step-dash"></div>}
            </React.Fragment>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          {CurrentSlideComponent && <CurrentSlideComponent formData={formData} handleInputChange={handleInputChange} />}
        </form>

        <div className="cf-actions">
          {slideHistory.length > 1 && <button className="cf-btn cf-back-btn" onClick={handleBack}>Back</button>}
          {!currentConfig.isLast && <button className="cf-btn cf-next-btn" onClick={handleNext}>Next</button>}
          {currentConfig.isLast && <button className="cf-btn cf-submit-btn" onClick={handleSubmit}>Finish</button>}
        </div>
      </div>
  );
}

// --- Reusable Input Components ---
const RadioOption = ({ name, value, label, checked, onChange }) => (
    <label className={`input-label ${checked ? 'selected' : ''}`}>
        <input type="radio" name={name} value={value} checked={checked} onChange={onChange} />
        <span className="checkmark radio"></span>
        <span className="cf-item-label-text">{label}</span>
    </label>
);

const CheckboxOption = ({ name, value, label, checked, onChange }) => (
    <label className={`input-label ${checked ? 'selected' : ''}`}>
        <input type="checkbox" name={name} value={value} checked={checked} onChange={onChange} />
        <span className="checkmark checkbox"></span>
        <span className="cf-item-label-text">{label}</span>
    </label>
);


// --- Slide Components ---
const IndustryStep = ({ formData, handleInputChange }) => (
  <div className="cf-slide">
    <div className="form-group-title">*What is the primary industry your web app will serve?</div>
    <div className="items-column">
      <RadioOption name="industry" value="healthcare" label="Healthcare" checked={formData.industry === 'healthcare'} onChange={handleInputChange} />
      <RadioOption name="industry" value="banking" label="Banking" checked={formData.industry === 'banking'} onChange={handleInputChange} />
      <RadioOption name="industry" value="other" label="Other" checked={formData.industry === 'other'} onChange={handleInputChange} />
    </div>
  </div>
);

const BankingStep = ({ formData, handleInputChange }) => (
  <div className="cf-slide">
    <div className="form-group-title">*What kind of banking software do you want to build?</div>
    <div className="items-column">
      <CheckboxOption name="banking_type" value="mobile" label="Mobile banking app" checked={formData.banking_type?.includes('mobile')} onChange={handleInputChange} />
      <CheckboxOption name="banking_type" value="internet" label="Internet banking app" checked={formData.banking_type?.includes('internet')} onChange={handleInputChange} />
      <CheckboxOption name="banking_type" value="crm" label="CRM" checked={formData.banking_type?.includes('crm')} onChange={handleInputChange} />
    </div>
  </div>
);

const HealthcareStep = ({ formData, handleInputChange }) => (
    <div className="cf-slide">
        <div className="form-group-title">*What kind of healthcare software do you want to develop?</div>
        <div className="items-column">
            <CheckboxOption name="healthcare_type" value="emr" label="EHR / EMR" checked={formData.healthcare_type?.includes('emr')} onChange={handleInputChange} />
            <CheckboxOption name="healthcare_type" value="telehealth" label="Telehealth Software" checked={formData.healthcare_type?.includes('telehealth')} onChange={handleInputChange} />
        </div>
    </div>
);

const OtherIndustryStep = ({ formData, handleInputChange }) => (
    <div className="cf-slide">
        <div className="form-group-title">*Please briefly describe your industry.</div>
        <input type="text" name="other_industry_description" value={formData.other_industry_description || ''} onChange={handleInputChange} style={{width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ddd'}}/>
    </div>
);

const VersionStep = ({ formData, handleInputChange }) => (
  <div className="cf-slide">
    <div className="form-group-title">*Which software version do you need?</div>
    <div className="items-column">
      <RadioOption name="version" value="mvp" label="MVP only" checked={formData.version === 'mvp'} onChange={handleInputChange} />
      <RadioOption name="version" value="full" label="A fully-featured solution" checked={formData.version === 'full'} onChange={handleInputChange} />
      <RadioOption name="version" value="mvp_later" label="MVP now, a fully-featured solution later" checked={formData.version === 'mvp_later'} onChange={handleInputChange} />
    </div>
  </div>
);

const EnvironmentStep = ({ formData, handleInputChange }) => (
  <div className="cf-slide">
    <div className="form-group-title">*Do you have any preferences for the environment?</div>
    <div className="items-column">
      <RadioOption name="environment" value="on_prem" label="On-premises" checked={formData.environment === 'on_prem'} onChange={handleInputChange} />
      <RadioOption name="environment" value="cloud" label="Cloud" checked={formData.environment === 'cloud'} onChange={handleInputChange} />
      <RadioOption name="environment" value="hybrid" label="Hybrid (cloud and on-premises)" checked={formData.environment === 'hybrid'} onChange={handleInputChange} />
    </div>
  </div>
);

const ContactStep = ({ formData, handleInputChange }) => (
    <div className="cf-slide">
        <div className="form-group-title">Almost done! Please provide your contact details.</div>
        <div className="items-column" style={{gap: '15px'}}>
             <input type="text" name="fullName" placeholder="* Full Name" required onChange={handleInputChange} value={formData.fullName || ''} style={{width: '100%', padding: '12px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ddd'}}/>
             <input type="email" name="email" placeholder="* Work Email" required onChange={handleInputChange} value={formData.email || ''} style={{width: '100%', padding: '12px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ddd'}}/>
             <input type="text" name="company" placeholder="* Company Name" required onChange={handleInputChange} value={formData.company || ''} style={{width: '100%', padding: '12px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ddd'}}/>
        </div>
    </div>
);

export default BRDHubspotForm;