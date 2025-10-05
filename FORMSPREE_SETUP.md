# Formspree Setup Guide for El 21 Systems Website

## 📋 Overview
All contact forms across your entire website are now configured to use Formspree for email delivery. This guide covers setup for **5 forms** across **4 pages**.

## ✅ Forms Integrated (All Pages)

### 1. **Footer Contact Form** (All Pages via Layout)
- **Location:** `src/components/ContactSection.tsx`
- **Visible On:** Every page (Home, Shop, Services, R&D, About Us)
- **Form ID Variable:** `YOUR_FORM_ID`
- **Purpose:** General contact inquiries, product quotes, support requests

### 2. **Project Discussion Form** (Services Page)
- **Location:** `src/pages/Services.tsx`
- **Visible On:** Services page only
- **Form ID Variable:** `YOUR_PROJECT_FORM_ID`
- **Purpose:** Custom project inquiries

### 3. **Service Quote Request Form** (Services Page)
- **Location:** `src/pages/Services.tsx`
- **Visible On:** Services page only
- **Form ID Variable:** `YOUR_QUOTE_FORM_ID`
- **Purpose:** Service quote requests

### 4. **Research Partnership Form** (R&D Page)
- **Location:** `src/pages/RnD.tsx`
- **Visible On:** R&D page only
- **Form ID Variable:** `YOUR_RESEARCH_FORM_ID`
- **Purpose:** Research collaboration inquiries

### 5. **Custom Development Form** (R&D Page)
- **Location:** `src/pages/RnD.tsx`
- **Visible On:** R&D page only
- **Form ID Variable:** `YOUR_CUSTOMDEV_FORM_ID`
- **Purpose:** Custom development quotes

## 🚀 Step 1: Create Formspree Account
1. Go to [https://formspree.io/](https://formspree.io/)
2. Sign up for a free account (allows 50 submissions/month)
3. Or upgrade to a paid plan for more submissions and advanced features

## 📝 Step 2: Create Forms in Formspree Dashboard

You need to create **5 separate forms** in your Formspree dashboard:

### Form 1: Main Contact Form
- **Name:** Contact Inquiry - El 21 Systems
- **Description:** Main contact form from website footer
- **Fields:** name, email, phone, company, product, quantity, message

### Form 2: Project Discussion Form (Services Page)
- **Name:** Project Discussion - Services
- **Description:** Custom project inquiries from Services page
- **Fields:** name, company, email, phone, projectBrief, budget, timeline, formType

### Form 3: Service Quote Request (Services Page)
- **Name:** Service Quote Request
- **Description:** Service quote requests from Services page
- **Fields:** name, company, email, phone, serviceType, requirements, preferredDate, formType

### Form 4: Research Partnership (R&D Page)
- **Name:** Research Partnership Inquiry
- **Description:** Research collaboration requests from R&D page
- **Fields:** name, organization, email, phone, researchArea, projectBrief, duration, formType

### Form 5: Custom Development (R&D Page)
- **Name:** Custom Development Request
- **Description:** Custom development quotes from R&D page
- **Fields:** name, company, email, phone, requirements, specifications, timeline, formType

## Step 3: Get Form IDs

After creating each form in Formspree:
1. Click on the form in your dashboard
2. Look for the form endpoint URL: `https://formspree.io/f/YOUR_FORM_ID`
3. Copy the **form ID** (the part after `/f/`)

## 🔧 Step 4: Update Your Code

Replace the placeholder form IDs in these files:

### File: `src/components/ContactSection.tsx`
```typescript
// Find line ~39
fetch('https://formspree.io/f/YOUR_FORM_ID'

// Replace with (example)
fetch('https://formspree.io/f/xyzabc123'
```

### File: `src/pages/Services.tsx`
```typescript
// Find line ~85
fetch('https://formspree.io/f/YOUR_PROJECT_FORM_ID'

// Replace with your Project Form ID
fetch('https://formspree.io/f/abc123xyz'

// Find line ~123
fetch('https://formspree.io/f/YOUR_QUOTE_FORM_ID'

// Replace with your Quote Form ID
fetch('https://formspree.io/f/def456uvw'
```

### File: `src/pages/RnD.tsx`
```typescript
// Find line ~77
fetch('https://formspree.io/f/YOUR_RESEARCH_FORM_ID'

// Replace with your Research Form ID
fetch('https://formspree.io/f/ghi789rst'

// Find line ~115
fetch('https://formspree.io/f/YOUR_CUSTOMDEV_FORM_ID'

// Replace with your Custom Dev Form ID
fetch('https://formspree.io/f/jkl012mno'
```

## Step 5: Configure Email Settings (Optional)

In each form's settings on Formspree dashboard, you can:
- ✅ Set up email notifications
- ✅ Add custom reply-to addresses
- ✅ Configure auto-response emails
- ✅ Add spam protection (reCAPTCHA)
- ✅ Customize submission redirect URLs
- ✅ Set up webhook integrations

## Step 6: Test Your Forms

1. Build and run your website: `npm run dev`
2. Test each form by submitting test data
3. Check your email for form submissions
4. Verify forms reset properly after submission

## Quick Setup Example

If your first form ID is `xyzabc123`, update the code like this:

```typescript
// Before
fetch('https://formspree.io/f/YOUR_FORM_ID'

// After
fetch('https://formspree.io/f/xyzabc123'
```

## Form Submission Flow

1. User fills out form
2. Clicks submit button
3. Data is sent to Formspree via AJAX
4. Formspree forwards email to your inbox
5. Success message shown to user
6. Form resets automatically

## Troubleshooting

### Form not submitting?
- Check that form ID is correct
- Verify internet connection
- Check browser console for errors

### Not receiving emails?
- Check Formspree dashboard for submissions
- Verify email settings in Formspree
- Check spam folder

### Need help?
- Formspree documentation: https://help.formspree.io/
- Formspree support: support@formspree.io

## Free Plan Limits

- **50 submissions/month** across all forms
- Email notifications included
- Spam filtering included
- No credit card required

## Paid Plans (if needed)

- **Gold Plan:** $10/month - 1,000 submissions
- **Platinum Plan:** $40/month - Unlimited submissions
- More features: Custom redirect, webhooks, file uploads

## Notes

- All forms include error handling
- Forms show alerts on success/failure
- Forms automatically reset after submission
- Each form includes `formType` field to identify the source
- AJAX submission prevents page reload

---

## 📊 Current Form Status - All Pages Covered

| Page(s) | Component | Form Type | Status | Form ID Variable |
|---------|-----------|-----------|--------|------------------|
| All Pages | ContactSection.tsx | General Contact | ✅ Ready | YOUR_FORM_ID |
| Services | Services.tsx | Project Discussion | ✅ Ready | YOUR_PROJECT_FORM_ID |
| Services | Services.tsx | Quote Request | ✅ Ready | YOUR_QUOTE_FORM_ID |
| R&D | RnD.tsx | Research Partnership | ✅ Ready | YOUR_RESEARCH_FORM_ID |
| R&D | RnD.tsx | Custom Development | ✅ Ready | YOUR_CUSTOMDEV_FORM_ID |

## 🔍 Pages Covered

✅ **Home Page** - Has Contact Form (via Layout)
✅ **Shop Page** - Has Contact Form (via Layout) + "Get Quote" buttons scroll to it
✅ **Services Page** - Has Contact Form + Project Form + Quote Form
✅ **R&D Page** - Has Contact Form + Research Form + Custom Dev Form
✅ **About Us Page** - Has Contact Form (via Layout)
✅ **Not Found Page** - Has Contact Form (via Layout)

**All pages are covered!** Every page on your website now has at least one contact form integrated with Formspree.

## 🎯 Next Step
Create forms in Formspree dashboard and update the form IDs in the code files listed above.
