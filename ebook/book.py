import os
from PyPDF2 import PdfFileReader
from datetime import datetime
from typing import List
from functools import reduce

from page import Page


class Book:
    def __init__(self, file_path, file_reader: PdfFileReader):
        self.file_path = file_path
        self.pages: List[Page] = []
        self.file_name = os.path.splitext(os.path.basename(file_path))[0]
        self.amount_pages: int = file_reader.numPages
        self.file_reader: PdfFileReader = file_reader
        self.current_page: Page = self.add_page(Page(0, None))

    def add_page(self, page: Page):
        self.pages.append(page)
        return page

    def back_page(self):
        if self.current_page.number - 1 > 0:
            page = self.pages[self.current_page.number - 1]
            page.start_time = datetime.now()
            self.update_page(page)
            return page
        raise Exception("Você chegou no inicio do livro")

    def next_page(self):
        if self.current_page.number + 1 <= self.amount_pages:
            self.current_page.set_duration(datetime.now())
            self.update_page(self.current_page)
            next_page = Page(self.current_page.number + 1, self.file_reader.getPage(self.current_page.number).extractText())
            self.current_page = self.add_page(next_page)
            return next_page
        print("Acabaram as paginas")
        return self.final_report()

    def update_page(self, page: Page):
        self.pages[page.number] = page

    def avg_time_pages(self):
        duration_list = [page.duration for page in self.pages]
        time = sum(duration_list) / len(duration_list)
        return time

    def min_time_pages(self):
        index = 0
        min = 0
        for page in self.pages:
            if index == 0:
                min = page.duration
                index += 1
            elif page.duration < min:
                min = page.duration

        return min

    def max_time_pages(self):
        index = 0
        max = 0
        for page in self.pages:
            if index == 0:
                max = page.duration
                index += 1
            elif page.duration > max:
                max = page.duration

        return max

    def final_report(self):
        self.current_page.set_duration(datetime.now())
        self.update_page(self.current_page)
        return {
            "Tempo médio de leitura das página": self.avg_time_pages(),
            "Tempo mínimo de leitura de uma página": self.min_time_pages(),
            "Tempo máximo de leitura das páginas": self.max_time_pages(),
        }