#!/usr/bin/python
"""
This example shows basic document generation functionality.
..  :copyright: (c) 2014 by Jelte Fennema.
    :license: MIT, see License for more details.
"""

# begin-doc-include
from pylatex import (
    Document, Section, Subsection, Command, Package, MiniPage, Tabular,
    NewLine, VerticalSpace, MultiColumn)
from pylatex.base_classes import Environment, CommandBase, Arguments

from pylatex.utils import italic, NoEscape

SMALL_SPACE = '.7cm'

class WebsiteCommand(CommandBase):
    _latex_name = 'website'
    packages = []

class EntryBigCommand(CommandBase):
    _latex_name = 'entrybig'
    packages = []


class EntryMidCommand(CommandBase):
    _latex_name = 'entrymid'
    packages = []


class OuterListCommand(CommandBase):
    _latex_name = 'outerlist'
    packages = []


class HeaderCommand(CommandBase):
    _latex_name = 'headinginline'
    packages = []

def clean_json(json):
    for entry in json:
        for key in entry:
            entry[key] = entry[key].replace('&', '\&')

def fill_document(doc):
    """Add a section, a subsection and some text to the document.
    :param doc: the document
    :type doc: :class:`pylatex.document.Document` instance
    """
    with doc.create(Section('A section')):
        doc.append('Some regular text and some ')
        doc.append(italic('italic text. '))

        with doc.create(Subsection('A subsection')):
            doc.append('Also some crazy characters: $&#{}')


def add_education(doc):
    import json
    with open('data/bio.json', 'r') as json_file:
        bio = json.load(json_file)
    print(bio)

    with doc.create(Section('Education and Experience')):
        for entry in bio:
            place = NoEscape(r'\textit{' + entry['place'] + '}')
            title = NoEscape(r'\textbf{' + entry['title'] + '}')
            period = NoEscape(entry['period'])
            if 'desc' in entry:
                desc = NoEscape(r'\small{' + entry['desc'] +'}')
            else:
                desc = ''

            # table1 = Tabular(NoEscape('|p{.9\textwidth|p{.1\textwidth}|'))
            table1 = Tabular(NoEscape('p{0.7\\textwidth} p{0.04\\textwidth} p{0.26\\textwidth}'))
            table1.add_row((title, '', place))
            table1.add_row((desc, '', period))
            doc.append(table1)
            doc.append(NoEscape(r'\\'))
            doc.append(VerticalSpace(SMALL_SPACE))

def add_projects(doc):
    import json
    with open('data/projects.json', 'r') as json_file:
        bio = json.load(json_file)

    with doc.create(Section('Projects')):
        for entry in bio:
            title = NoEscape(r'\textbf{' + entry['title'] + '}')
            if 'subtitle' in entry:
                subtitle = NoEscape(entry['subtitle'])
            else:
                subtitle = ''
            desc = NoEscape(r'\small{' + entry['desc'] +'}')

            # table1 = Tabular(NoEscape('|p{.9\textwidth|p{.1\textwidth}|'))
            table1 = Tabular(NoEscape('p{0.99\\textwidth} p{0.01\\textwidth}'))
            table1.add_row((title, ''))
            table1.add_row((desc, ''))
            doc.append(table1)
            doc.append(NoEscape(r'\\'))
            doc.append(VerticalSpace(SMALL_SPACE))

def add_software(doc):
    import json
    with open('data/softwares.json', 'r') as json_file:
        bio = json.load(json_file)

    with doc.create(Section('Software')):
        for entry in bio:
            title = NoEscape(r'\textbf{' + entry['title'] + '}')
            desc = NoEscape(r'\small{' + entry['desc'] +'}')
            link = NoEscape(entry['link'])

            # table1 = Tabular(NoEscape('|p{.9\textwidth|p{.1\textwidth}|'))
            table1 = Tabular(NoEscape('p{0.7\\textwidth} p{0.29\\textwidth}'))
            table1.add_row((title, link))
            table1.add_row((MultiColumn(2, align='l', data=desc),))
            doc.append(table1)
            doc.append(NoEscape(r'\\'))
            doc.append(VerticalSpace(SMALL_SPACE))

def add_talks(doc):
    import json
    with open('data/talks.json', 'r') as json_file:
        bio = json.load(json_file)

    clean_json(bio)

    with doc.create(Section('Conference')):
        for entry in bio:
            title = NoEscape(r'\textbf{' + entry['title'] + '}')
            year = NoEscape(entry['year'])
            desc = NoEscape(r'\small{' + entry.get('desc', '') +'}')
            talk = NoEscape(r'\small{' + entry.get('talk', '') +'}')
            city = NoEscape(r'\textit{' + entry['city'] +'}')

            # table1 = Tabular(NoEscape('|p{.9\textwidth|p{.1\textwidth}|'))
            table1 = Tabular(NoEscape('p{0.65\\textwidth} p{0.35\\textwidth}'))
            table1.add_row((title, NoEscape(f'{city}, {year}')))
            if desc != '\small{}':
                table1.add_row((MultiColumn(2, align='l', data=desc),))
            if talk != '\small{}':
                table1.add_row((MultiColumn(2, align='l', data=talk),))
            doc.append(table1)
            doc.append(NoEscape(r'\\'))
            doc.append(VerticalSpace(SMALL_SPACE))

def add_software(doc):
    import json
    with open('data/softwares.json', 'r') as json_file:
        bio = json.load(json_file)

    with doc.create(Section('Software')):
        for entry in bio:
            title = NoEscape(r'\textbf{' + entry['title'] + '}')
            desc = NoEscape(r'\small{' + entry['desc'] +'}')
            link = NoEscape(entry['link'])

            # table1 = Tabular(NoEscape('|p{.9\textwidth|p{.1\textwidth}|'))
            table1 = Tabular(NoEscape('p{0.7\\textwidth} p{0.29\\textwidth}'))
            table1.add_row((title, link))
            table1.add_row((MultiColumn(2, align='l', data=desc),))
            doc.append(table1)
            doc.append(NoEscape(r'\\'))
            doc.append(VerticalSpace(SMALL_SPACE))

def add_publications(doc):

    with doc.create(Section('Publications')):
        doc.append(NoEscape(r'The complete list of all publications is '
                             'attached on a separate files.'))

def simplecv_preamble(doc):
    doc.preamble.append(NoEscape(r'\def\theme{MidnightBlue}'))
    doc.preamble.append(NoEscape(r'\usepackage{simplecv}'))
    doc.preamble.append(NoEscape(r'\boldname{Surname}{Name}{N.}'))

def header(doc):
    doc.append(HeaderCommand(arguments=Arguments(
        'Nicola Demo',
        NoEscape(
            r'''Website: \website{nicolademo.xyz}\\
                Email: \email{nicola.demo@sissa.it}\\
                Linkedin: \linkedin{nicola-demo}\\
                Github: \github{ndem0}\\
             '''
        )))
    )


if __name__ == '__main__':

    doc = Document(document_options=["11pt", "letterpaper"])
    doc.packages.append(Package('biblatex'))

    simplecv_preamble(doc)
    header(doc)

    add_education(doc)
    add_projects(doc)
    add_software(doc)
    add_talks(doc)
    add_publications(doc)

    doc.generate_tex('cv')
    # doc.generate_pdf('cv', clean_tex=False)
    # doc.generate_pdf('cv', clean_tex=False, compiler='pdflatex')
