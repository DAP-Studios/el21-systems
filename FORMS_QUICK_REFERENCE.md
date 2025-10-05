# Formspree Integration - Quick Reference

## All Forms at a Glance

### 🌐 Website-Wide Coverage
Every page has at least one working contact form powered by Formspree!

---

## 📍 Form Locations by Page

### 1. Home Page (`/`)
- ✅ Footer Contact Form (via Layout)

### 2. Shop Page (`/shop`)
- ✅ Footer Contact Form (via Layout)
- 📌 "Get Quote" buttons scroll to contact form

### 3. Services Page (`/services`)
- ✅ Footer Contact Form (via Layout)
- ✅ "Discuss Your Project" Dialog Form
- ✅ "Request Service Quote" Dialog Form

### 4. R&D Page (`/rnd`)
- ✅ Footer Contact Form (via Layout)
- ✅ "Discuss Research Partnership" Dialog Form
- ✅ "Request Custom Development" Dialog Form

### 5. About Us Page (`/about`)
- ✅ Footer Contact Form (via Layout)

### 6. 404 Not Found Page
- ✅ Footer Contact Form (via Layout)

---

## 🔧 Setup Checklist

- [ ] Create Formspree account at formspree.io
- [ ] Create 5 forms in Formspree dashboard
- [ ] Copy Form IDs from Formspree
- [ ] Update `YOUR_FORM_ID` in `src/components/ContactSection.tsx`
- [ ] Update `YOUR_PROJECT_FORM_ID` in `src/pages/Services.tsx`
- [ ] Update `YOUR_QUOTE_FORM_ID` in `src/pages/Services.tsx`
- [ ] Update `YOUR_RESEARCH_FORM_ID` in `src/pages/RnD.tsx`
- [ ] Update `YOUR_CUSTOMDEV_FORM_ID` in `src/pages/RnD.tsx`
- [ ] Test each form by submitting test data
- [ ] Verify emails arrive in your inbox
- [ ] Configure email notifications in Formspree dashboard

---

## 🎨 Form Features (All Forms Include)

✅ Async form submission (no page reload)
✅ Error handling with user-friendly messages
✅ Success confirmation alerts
✅ Automatic form reset after submission
✅ Form validation (required fields)
✅ Professional UI with shadcn components
✅ Mobile responsive design
✅ Loading states during submission

---

## 📧 Email Configuration Tips

### Recommended Formspree Settings:
1. **Email Notifications:** Set your business email
2. **Subject Line Templates:** 
   - "New Contact Inquiry - El 21 Systems"
   - "Project Discussion Request - {name}"
   - "Service Quote Request - {company}"
3. **Auto-Reply:** Enable to confirm receipt to customers
4. **Spam Protection:** Enable reCAPTCHA (optional)

---

## 🚀 Quick Start Commands

```bash
# Test your website locally
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📞 Support

If you encounter issues:
1. Check the browser console for errors
2. Verify Form IDs are correct
3. Check Formspree dashboard for submissions
4. Review FORMSPREE_SETUP.md for detailed instructions

---

**🎉 All Done!** Once you add your Formspree Form IDs, all contact forms across your entire website will be fully functional!
