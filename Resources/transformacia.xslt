<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="text" indent="yes"/>
	<xsl:template match="/">
DOTACIA NA KULTURU
******************

Názov firmy: <xsl:value-of select="dotacia/nazovFirmy"/>
Pravna forma: <xsl:value-of select="dotacia/pravnaForma"/>
ICO: <xsl:value-of select="dotacia/ico"/>
DIC: <xsl:value-of select="dotacia/dic"/>
Telefon: <xsl:value-of select="dotacia/telefon"/>
e-mail: <xsl:value-of select="dotacia/email"/>
Adresa: <xsl:value-of select="dotacia/adresa"/>
Mesto: <xsl:value-of select="dotacia/mesto"/>
Okres: <xsl:value-of select="dotacia/okres"/>
Kraj: <xsl:value-of select="dotacia/kraj"/>
PSC: <xsl:value-of select="dotacia/psc"/>

Ziadana suma: <xsl:value-of select="dotacia/ziadanaSuma"/> €

NAKLADY:
___________________________________________________

  <xsl:for-each select="dotacia/naklady">
	<xsl:value-of select="polozka"/> : <xsl:value-of select="cena"/> €
  </xsl:for-each>

	</xsl:template>
</xsl:stylesheet>
