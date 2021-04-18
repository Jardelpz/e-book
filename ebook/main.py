import pygame
import PyPDF2
import time
from tkinter import filedialog

from book import Book


def build_file(file_path):
    file = open(file_path, 'rb')
    file_reader = PyPDF2.PdfFileReader(file)
    print(file_reader)
    book = Book(file_path, file_reader)
    time.sleep(2)
    book.next_page()
    time.sleep(1)
    book.next_page()
    time.sleep(3)
    book.next_page()
    time.sleep(2)
    print(book.final_report())

    file.close()


def build_init_images(win, car_img, x, y):
    win.blit(car_img, (x, y))


def build_text(win, x, y):
    win.blit(win, (x, y))


pygame.init()
font = pygame.font.SysFont('cambria', 50)
win = pygame.display.set_mode((1600, 900))
win.fill(pygame.Color('white'))

pygame.display.set_caption("Kindle")
arrow_right = pygame.image.load('arrow_right.png')
arrow_left = pygame.image.load('arrow_left.png')

arrow_right = pygame.transform.scale(arrow_right, (100, 80))
arrow_left = pygame.transform.scale(arrow_left, (100, 80))

build_init_images(win, arrow_left, 356, 772)
build_init_images(win, arrow_right, 1174, 780)
open_archive = pygame.draw.rect(win, (0, 0, 213), (10, 20, 50, 50))

run = True

while run:
    pygame.time.delay(100)
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            quit()

        keys = pygame.key.get_pressed()
        mouse = pygame.mouse.get_pos()

        if open_archive.collidepoint(mouse):
            if event.__dict__.get('button') == 1:
                open_text = font.render('Você apertou no botão', True, pygame.Color('black'))
                build_text(open_text, 240, 235)
                file_path = filedialog.askopenfile().name
                build_file(file_path)

        if keys[pygame.K_RIGHT]:
            print("right")

            print(mouse)

        if keys[pygame.K_LEFT]:
            print("left")

            print(mouse)

        pygame.display.update()
