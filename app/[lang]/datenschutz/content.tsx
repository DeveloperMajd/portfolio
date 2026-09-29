import type { ReactNode } from "react";
import { ContactDetails } from "@/components/LegalPage";
import type { Locale } from "@/lib/i18n";
import { site } from "@/lib/site";

// Keep in step with the code: the browser storage keys come from BootScript,
// ChatIntro and LanguageSwitch, and every third party the site talks to is
// listed here. Update the date at the bottom whenever this text changes.

const email = <a href={`mailto:${site.email}`}>{site.email}</a>;

export const content = {
  en: (
    <>
      <p>
        This page explains what personal data is processed when you visit developermajd.com, why, and on what legal
        basis. In short: the site uses no analytics or tracking tools, shows no ads and sets no cookies that would need
        your consent.
      </p>

      <h2>Controller</h2>
      <p>The controller responsible for processing data on this website is:</p>
      <ContactDetails lang="en" />

      <h2>Hosting and server logs</h2>
      <p>
        The site is hosted by Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, USA, and delivered through
        Vercel’s global server network. Every time you open a page, Vercel processes data that your browser sends
        automatically:
      </p>
      <ul>
        <li>your IP address and the approximate location derived from it</li>
        <li>the date and time of the request</li>
        <li>the page or file requested</li>
        <li>the page you came from (referrer), if your browser sends it</li>
        <li>your browser, operating system and device (user agent)</li>
      </ul>
      <p>
        This data is needed to deliver the site and keep it secure and stable, for example to fend off attacks. The
        legal basis is Art. 6(1)(f) GDPR; my legitimate interest is a secure website that stays reliably available.
      </p>
      <p>
        Vercel processes this data on my behalf under a data processing agreement (Art. 28 GDPR). Data may be
        transferred to the USA in the process. Vercel is certified under the EU-U.S. Data Privacy Framework, so the
        transfer is based on the European Commission’s adequacy decision (Art. 45 GDPR). Vercel deletes or anonymises
        the data once it is no longer needed for these purposes. See{" "}
        <a href="https://vercel.com/legal/privacy-policy">Vercel’s privacy policy</a> for details.
      </p>
      <p>
        Every file on this site, fonts included, comes from Vercel. Your browser does not connect to Google Fonts or
        any other third party when you visit.
      </p>

      <h2>Storage in your browser</h2>
      <p>
        For three convenience features, the site stores small entries in your browser. None of them contains an
        identifier that could be used to recognise you:
      </p>
      <ul>
        <li>
          <code>theme</code> (local storage): your choice of light or dark mode, once you use the switch. It stays until
          you clear this site’s data in your browser.
        </li>
        <li>
          <code>intro-seen</code> (session storage): notes that the welcome animation has already played, so it doesn’t
          play again on every page view. It is deleted when you close the tab.
        </li>
        <li>
          <code>NEXT_LOCALE</code> (cookie): the language you last picked with the language switch, so that your next
          visit opens in that language. Your browser sends it with every request to this site, and it expires after a
          year.
        </li>
      </ul>
      <p>
        The first two never leave your browser. Storing and reading these entries is based on Section 25(2) no. 2 of
        the German Telecommunications Digital Services Data Protection Act (TDDDG), because they are strictly necessary
        for features you ask for. No consent is required.
      </p>

      <h2>Contact by email or phone</h2>
      <p>
        If you email or call me, I process the details you give me (such as your name, email address, phone number and
        the content of your message) to answer your enquiry. The legal basis is Art. 6(1)(b) GDPR if your enquiry is
        aimed at a contract with you, and Art. 6(1)(f) GDPR otherwise; my legitimate interest is answering enquiries.
      </p>
      <p>
        My mailbox is run on my behalf by IONOS SE, Elgendorfer Str. 57, 56410 Montabaur, Germany. I delete your
        messages once they are no longer needed to handle your enquiry, unless a legal retention period requires me to
        keep them.
      </p>

      <h2>Booking a call with Calendly</h2>
      <p>
        The booking link takes you to Calendly. Calendly is not embedded in this site: your browser only connects to
        Calendly once you click the link.
      </p>
      <p>
        If you book a call there, Calendly, LLC, 115 E Main St., Ste A1B, Buford, GA 30518, USA, processes your details
        (such as your name, email address, the time you picked and any notes) on my behalf so that we can hold the call.
        The legal basis is the same as for contact by email: Art. 6(1)(b) or (f) GDPR. Calendly is certified under the
        EU-U.S. Data Privacy Framework. The Calendly site itself, including the cookies it uses, is covered by{" "}
        <a href="https://calendly.com/legal/privacy-notice">Calendly’s privacy notice</a>.
      </p>

      <h2>Links to other websites</h2>
      <p>
        The site links to LinkedIn, GitHub and my projects, among others. These are plain links: no data is sent to
        those sites while you browse this one. Once you follow a link, the privacy policy of the site you land on
        applies.
      </p>

      <h2>Your rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>access the data I hold about you (Art. 15 GDPR)</li>
        <li>have inaccurate data corrected (Art. 16 GDPR)</li>
        <li>have your data erased (Art. 17 GDPR)</li>
        <li>restrict processing (Art. 18 GDPR)</li>
        <li>data portability (Art. 20 GDPR)</li>
      </ul>
      <p>To use any of these rights, email me at {email}.</p>

      <h3>Right to object</h3>
      <p>
        Where I process data on the basis of Art. 6(1)(f) GDPR, you can object to that processing at any time on
        grounds relating to your particular situation (Art. 21 GDPR). I will then stop processing it, unless I can show
        compelling legitimate grounds that override your interests, or the processing is needed to establish, exercise
        or defend legal claims.
      </p>

      <h3>Right to lodge a complaint</h3>
      <p>
        You can complain to a data protection supervisory authority (Art. 77 GDPR). The authority responsible for me is
        the Berlin Commissioner for Data Protection and Freedom of Information (Berliner Beauftragte für Datenschutz und
        Informationsfreiheit), Alt-Moabit 59–61, 10555 Berlin, Germany,{" "}
        <a href="https://www.datenschutz-berlin.de">datenschutz-berlin.de</a>.
      </p>

      <h2>Other information</h2>
      <p>
        The site is only served over an encrypted HTTPS connection. You are not obliged to provide any personal data,
        but without the connection data described under hosting, the site cannot be displayed. There is no automated
        decision-making or profiling.
      </p>
      <p>Last updated: September 2026</p>
    </>
  ),
  de: (
    <>
      <p>
        Hier erfahren Sie, welche personenbezogenen Daten beim Besuch von developermajd.com verarbeitet werden, wozu
        und auf welcher Rechtsgrundlage. Kurz gesagt: Die Website nutzt keine Analyse- oder Tracking-Werkzeuge, zeigt
        keine Werbung und setzt keine Cookies, für die Ihre Einwilligung nötig wäre.
      </p>

      <h2>Verantwortlicher</h2>
      <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
      <ContactDetails lang="de" />

      <h2>Hosting und Server-Logfiles</h2>
      <p>
        Die Website wird bei Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, USA, gehostet und über deren
        weltweites Servernetz ausgeliefert. Bei jedem Seitenaufruf verarbeitet Vercel Daten, die Ihr Browser dabei
        automatisch übermittelt:
      </p>
      <ul>
        <li>IP-Adresse und die daraus abgeleitete ungefähre Region</li>
        <li>Datum und Uhrzeit des Abrufs</li>
        <li>die aufgerufene Seite oder Datei</li>
        <li>die zuvor besuchte Seite (Referrer), sofern Ihr Browser sie übermittelt</li>
        <li>Browser, Betriebssystem und Gerät (User-Agent)</li>
      </ul>
      <p>
        Diese Daten sind nötig, um die Website auszuliefern und ihre Sicherheit und Stabilität zu gewährleisten, etwa um
        Angriffe abzuwehren. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; mein berechtigtes Interesse ist eine
        sichere und zuverlässig erreichbare Website.
      </p>
      <p>
        Vercel verarbeitet die Daten in meinem Auftrag auf Grundlage eines Vertrags zur Auftragsverarbeitung (Art. 28
        DSGVO). Dabei können Daten in die USA übermittelt werden. Vercel ist nach dem EU-US Data Privacy Framework
        zertifiziert; die Übermittlung stützt sich daher auf den Angemessenheitsbeschluss der EU-Kommission (Art. 45
        DSGVO). Vercel löscht oder anonymisiert die Daten, sobald sie für diese Zwecke nicht mehr benötigt werden.
        Einzelheiten finden Sie in der{" "}
        <a href="https://vercel.com/legal/privacy-policy" hrefLang="en">
          Datenschutzerklärung von Vercel
        </a>
        .
      </p>
      <p>
        Alle Dateien dieser Website, auch die Schriftarten, kommen von Vercel. Ihr Browser verbindet sich beim Besuch
        weder mit Google Fonts noch mit anderen Drittanbietern.
      </p>

      <h2>Speicherung im Browser</h2>
      <p>
        Für drei Komfortfunktionen speichert die Website kleine Einträge in Ihrem Browser. Keiner davon enthält eine
        Kennung, über die Sie wiedererkannt werden könnten:
      </p>
      <ul>
        <li>
          <code>theme</code> (Local Storage): Ihre Wahl zwischen hellem und dunklem Design, sobald Sie den Schalter
          nutzen. Bleibt gespeichert, bis Sie die Websitedaten in Ihrem Browser löschen.
        </li>
        <li>
          <code>intro-seen</code> (Session Storage): merkt sich, dass die Begrüßungsanimation schon gelaufen ist, damit
          sie nicht bei jedem Seitenaufruf erneut abläuft. Wird gelöscht, wenn Sie den Tab schließen.
        </li>
        <li>
          <code>NEXT_LOCALE</code> (Cookie): die Sprache, die Sie zuletzt über den Sprachschalter gewählt haben, damit
          sich Ihr nächster Besuch in dieser Sprache öffnet. Ihr Browser sendet das Cookie bei jedem Aufruf dieser
          Website mit; es läuft nach einem Jahr ab.
        </li>
      </ul>
      <p>
        Die ersten beiden Einträge verlassen Ihren Browser nie. Rechtsgrundlage für das Speichern und Auslesen ist § 25
        Abs. 2 Nr. 2 TDDDG, weil die Einträge für Funktionen, die Sie selbst nutzen, unbedingt erforderlich sind. Eine
        Einwilligung ist dafür nicht nötig.
      </p>

      <h2>Kontakt per E-Mail oder Telefon</h2>
      <p>
        Wenn Sie mir schreiben oder mich anrufen, verarbeite ich Ihre Angaben (etwa Name, E-Mail-Adresse,
        Telefonnummer und den Inhalt Ihrer Nachricht), um Ihre Anfrage zu beantworten. Rechtsgrundlage ist Art. 6 Abs.
        1 lit. b DSGVO, wenn Ihre Anfrage auf einen Vertrag mit Ihnen abzielt, sonst Art. 6 Abs. 1 lit. f DSGVO; mein
        berechtigtes Interesse ist die Beantwortung von Anfragen.
      </p>
      <p>
        Mein E-Mail-Postfach betreibt IONOS SE, Elgendorfer Str. 57, 56410 Montabaur, in meinem Auftrag. Ich lösche
        Ihre Nachrichten, sobald sie für die Bearbeitung Ihrer Anfrage nicht mehr nötig sind, es sei denn, gesetzliche
        Aufbewahrungspflichten stehen dem entgegen.
      </p>

      <h2>Terminbuchung über Calendly</h2>
      <p>
        Der Link zur Terminbuchung führt zu Calendly. Calendly ist nicht in diese Website eingebunden: Ihr Browser
        verbindet sich erst mit Calendly, wenn Sie auf den Link klicken.
      </p>
      <p>
        Wenn Sie dort einen Termin buchen, verarbeitet Calendly, LLC, 115 E Main St., Ste A1B, Buford, GA 30518, USA,
        Ihre Angaben (etwa Name, E-Mail-Adresse, gewählten Termin und Ihre Notizen) in meinem Auftrag, damit wir das
        Gespräch führen können. Rechtsgrundlage ist wie beim Kontakt per E-Mail Art. 6 Abs. 1 lit. b oder lit. f
        DSGVO. Calendly ist nach dem EU-US Data Privacy Framework zertifiziert. Für die Calendly-Seite selbst,
        einschließlich der dort verwendeten Cookies, gilt die{" "}
        <a href="https://calendly.com/legal/privacy-notice" hrefLang="en">
          Datenschutzerklärung von Calendly
        </a>
        .
      </p>

      <h2>Links zu anderen Websites</h2>
      <p>
        Die Website verlinkt unter anderem auf LinkedIn, GitHub und meine Projekte. Das sind einfache Links: Solange Sie
        sich auf dieser Website bewegen, werden keine Daten an diese Anbieter übertragen. Sobald Sie einem Link folgen,
        gilt die Datenschutzerklärung der Zielseite.
      </p>

      <h2>Ihre Rechte</h2>
      <p>Sie haben das Recht auf:</p>
      <ul>
        <li>Auskunft über die zu Ihnen gespeicherten Daten (Art. 15 DSGVO)</li>
        <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
        <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
        <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
      </ul>
      <p>Schreiben Sie mir dafür einfach eine E-Mail an {email}.</p>

      <h3>Widerspruchsrecht</h3>
      <p>
        Soweit ich Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO verarbeite, können Sie dieser Verarbeitung aus
        Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit widersprechen (Art. 21 DSGVO). Ich
        verarbeite die Daten dann nicht mehr, es sei denn, ich kann zwingende schutzwürdige Gründe nachweisen, die Ihre
        Interessen überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von
        Rechtsansprüchen.
      </p>

      <h3>Beschwerderecht</h3>
      <p>
        Sie können sich bei einer Datenschutz-Aufsichtsbehörde beschweren (Art. 77 DSGVO). Für mich zuständig ist die
        Berliner Beauftragte für Datenschutz und Informationsfreiheit, Alt-Moabit 59–61, 10555 Berlin,{" "}
        <a href="https://www.datenschutz-berlin.de">datenschutz-berlin.de</a>.
      </p>

      <h2>Weitere Hinweise</h2>
      <p>
        Die Website wird ausschließlich über eine verschlüsselte HTTPS-Verbindung ausgeliefert. Sie sind nicht
        verpflichtet, personenbezogene Daten bereitzustellen; ohne die unter „Hosting und Server-Logfiles“ beschriebenen Verbindungsdaten
        kann die Website allerdings nicht angezeigt werden. Eine automatisierte Entscheidungsfindung oder ein Profiling
        findet nicht statt.
      </p>
      <p>Stand: September 2026</p>
    </>
  ),
} satisfies Record<Locale, ReactNode>;
