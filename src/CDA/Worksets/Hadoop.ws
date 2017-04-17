<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE Workset SYSTEM "http://dependency-analyzer.org/schema/dtd/workset-1.8.dtd">
<Workset version="8">
  <WorksetName>Hadoop</WorksetName>
  <Description>This is the CDA Workset for Hadoop Yarn.</Description>
  <Options auto-reload="yes" />
  <Classpath shortContainerNames="yes">
    <ClasspathPart type="bin-class">C:/Users/Michael/Documents/Capstone/InputProjects/hadoop-3.0.0-alpha2/share/hadoop/hdfs/**/*.jar</ClasspathPart>
  </Classpath>
  <ViewFilters>
    <PatternFilter active="yes">java.*</PatternFilter>
    <PatternFilter active="yes">javax.*</PatternFilter>
    <PatternFilter active="yes">com.sun.*</PatternFilter>
    <PatternFilter active="yes">org.xml.sax*</PatternFilter>
    <PatternFilter active="yes">org.omg.*</PatternFilter>
    <PatternFilter active="yes">org.w3c.dom.*</PatternFilter>
  </ViewFilters>
  <IgnoreFilters>
    <PatternFilter active="no">java.*</PatternFilter>
    <PatternFilter active="no">javax.*</PatternFilter>
    <PatternFilter active="no">com.sun.*</PatternFilter>
    <PatternFilter active="no">org.xml.sax*</PatternFilter>
    <PatternFilter active="no">org.omg.*</PatternFilter>
    <PatternFilter active="no">org.w3c.dom.*</PatternFilter>
  </IgnoreFilters>
  <Architecture>
    <ComponentModel name="Default" />
  </Architecture>
</Workset>