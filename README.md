# Etikoni Hope Charity Foundation — Official Website

> **A ministry outreach of Jesus Celebration Centre (JCC Etikoni)**  
> Mbiuni Ward, Mwala Subcounty, Machakos County, Kenya.

---

## 📌 Project Overview
Etikoni Hope Charity Foundation is a faith-rooted, community-based NGO dedicated to holistic child and youth transformation in rural Machakos County. This static web platform is designed to be lightweight, mobile-first, fast-loading across Kenya mobile data networks, and human-crafted without generic AI placeholders.

---

## 📂 Project Architecture

```
Etikoni_Hope/
├── index.html                    # Homepage (Mission, University Milestone, Pillars, Equity Paybill)
├── about.html                    # History, Vision, Mission, Statement of Faith, Church Leadership
├── programs.html                 # 4 Holistic Pillars, 6 Local Challenges, 9 Selection Criteria
├── gallery.html                  # Photo Documentary & Interactive Lightbox
├── donate.html                   # Lipa na M-PESA / Equity Paybill Guide, Sponsorship Tiers
├── contact.html                  # Compound Location, Contact Details, WhatsApp Link, Inquiry Form
├── 404.html                      # Branded error page
├── .htaccess                     # Apache/cPanel server config (HTTPS, Gzip, Caching, Security)
├── etikonihope_cpanel_upload.zip # One-click upload archive for cPanel public_html
└── assets/
    ├── css/
    │   └── styles.css            # Responsive styles & warm earth tone palette
    ├── js/
    │   └── main.js               # Navigation menu, lightbox modal, copy-to-clipboard toast
    └── images/                   # Optimized real community & church photographs
```

---

## 💳 Verified Giving & Bank Details

* **Equity Bank / M-PESA Paybill:**
  * **Business Number:** `247247`
  * **Account Number:** `648632`
  * **Account Name:** Jesus Celebration Centre, Etikoni Branch
* **Cheques:** Payable to *Jesus Celebration Centre, Etikoni Branch*
* **Leadership Contacts:**
  * Pastor Dominic Mutuku: `+254 721 850 684` / `+254 740 651 215`
  * Church Email: `etikonijcc@gmail.com`

---

## 🚀 cPanel Deployment Guide

### Step 1: Log in to cPanel
* Access URL: `https://41.80.37.9:2083/` (or `https://etikonihope.co.ke:2083/` once DNS propagates).
* Note: If accessing via the IP address, your browser may show a temporary SSL warning—click "Advanced" and proceed.

### Step 2: Open File Manager
1. In cPanel dashboard, click on **File Manager** (under *Files* section).
2. On the top-right toolbar, click **Settings (Gear icon)**.
3. Check the box **"Show Hidden Files (dotfiles)"** and click **Save**. (This ensures `.htaccess` is visible).
4. Double-click to navigate into the **`public_html`** folder.

### Step 3: Clean Default Placeholder Files (If Any)
* If your hosting came with a default `index.html`, `defaultwebpage.cgi`, or `hosting-start` placeholder, delete or move them to prevent conflicts.

### Step 4: Upload the Archive
1. Click the **Upload** button in the top toolbar.
2. Select or drag-and-drop **`etikonihope_cpanel_upload.zip`**.
3. Wait for the progress bar to turn green (100%).
4. Go back to File Manager in `public_html`.

### Step 5: Extract the Archive
1. Right-click on **`etikonihope_cpanel_upload.zip`** and select **Extract** (or click *Extract* on the top toolbar).
2. Set extraction path to `/public_html` and confirm.
3. Verify that `index.html`, `about.html`, `assets/`, `.htaccess`, etc. are directly inside `public_html/`.
4. (Optional) Delete the `.zip` file from `public_html` to save disk space.

### Step 6: Enable Free SSL (AutoSSL / Let's Encrypt)
1. Go back to the cPanel Home.
2. Under *Security*, click on **SSL/TLS Status**.
3. Select your domain (`etikonihope.co.ke` and `www.etikonihope.co.ke`).
4. Click **Run AutoSSL**. Within a few minutes, green lock icons will appear next to the domains.

### Step 7: Create Official Domain Email (Optional but Recommended)
1. Under *Email*, click **Email Accounts**.
2. Click **Create** to set up `info@etikonihope.co.ke` or `hope@etikonihope.co.ke`.
3. Under *Forwarders*, you can set emails to automatically forward to `etikonijcc@gmail.com`.
